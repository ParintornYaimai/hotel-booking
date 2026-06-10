import bcrypt from 'bcryptjs';
import type { FastifyInstance } from 'fastify';

import type {
  LoginInput,
  LoginResult,
  RegisterInput,
  RegisterResult
} from '../dto/auth.dto';
import type { AuthUseCasePort } from '../ports/auth-use-case.port';
import type { AuthUser, SafeAuthUser } from '../../domain/entities/auth-user';
import type { AuthRepositoryPort } from '../../domain/repositories/auth.repository';
import { ConflictError, UnauthorizedError } from '../../../../shared/errors';

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

    const isValidPassword = await this.verifyPassword(
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

  async register(input: RegisterInput): Promise<RegisterResult> {
    const existingUser = await this.repository.findByEmail(input.email);
    if (existingUser) {
      throw new ConflictError('Email already exists', {
        code: 'EMAIL_ALREADY_EXISTS',
        details: { email: input.email }
      });
    }

    const passwordHash = await bcrypt.hash(input.password, 10);

    await this.repository.create({
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      passwordHash
    });

    return {
      message: 'User registered successfully'
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

  private async verifyPassword(userPassword: string, passwordHash: string):Promise<boolean> {
    return bcrypt.compare(userPassword, passwordHash);
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
