import bcrypt from 'bcryptjs';
import type { FastifyInstance } from 'fastify';

import type { LoginInput } from '../dto/auth.dto';
import type { LoginResult } from '../dto/auth.dto';
import type { AuthUseCasePort } from '../ports/auth-use-case.port';
import type { AuthUser, SafeAuthUser } from '../../domain/entities/auth-user';
import type { AuthRepositoryPort } from '../../domain/repositories/auth.repository';
import { UnauthorizedError } from '../../../../shared/errors';

interface AccessTokenPayload {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

export class AuthUseCase implements AuthUseCasePort {
  constructor(
    private readonly repository: AuthRepositoryPort,
    private readonly jwt: FastifyInstance['jwt']
  ) {}

  async login(input: LoginInput): Promise<LoginResult> {
    const user = await this.repository.findByEmail(input.email);
    if (!user) {
      throw new UnauthorizedError('Invalid email or password', {
        code: 'INVALID_CREDENTIALS'
      });
    }

    const isValidPassword = this.verifyPassword(
      input.password,
      user.password_hash
    );

    if (!isValidPassword) {
      throw new UnauthorizedError('Invalid email or password', {
        code: 'INVALID_CREDENTIALS'
      });
    }

    const payload = this.buildTokenPayload(user);
    const accessToken = this.generateAccessToken(payload);
    const refreshToken = this.generateRefreshToken(payload);

    return {
      user: this.mapResponse(user),
      tokens: {
        accessToken,
        refreshToken,
      } ,
    };
  }

  private buildTokenPayload(user: AuthUser): AccessTokenPayload {
    return {
      userId: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      role: user.role
    };
  }

  private generateAccessToken(payload: AccessTokenPayload): string {
    return this.jwt.sign(payload, { expiresIn: '15m' });
  }

  private generateRefreshToken(payload: AccessTokenPayload): string {
    return this.jwt.sign(payload, { expiresIn: '7d' });
  }

  private verifyPassword(userPassword: string, passwordHash: string): boolean {
    return bcrypt.compareSync(userPassword, passwordHash);
  }

  private mapResponse(user: AuthUser): SafeAuthUser {
    return {
      id: user.id,
      email: user.email,
      username: user.username,
      first_name: user.first_name,
      last_name: user.last_name,
      phone_number: user.phone_number,
      phone_country_code: user.phone_country_code,
      avatar_url: user.avatar_url,
      role: user.role,
      status: user.status,
      is_email_verified: user.is_email_verified,
      last_login_at: user.last_login_at,
      created_at: user.created_at,
      updated_at: user.updated_at,
      deleted_at: user.deleted_at
    };
  }
}
