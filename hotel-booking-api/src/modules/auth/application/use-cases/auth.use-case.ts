import { randomUUID } from 'node:crypto';
import bcrypt from 'bcryptjs';
import type { FastifyInstance } from 'fastify';
import type {
  AuthSessionContext,
  LoginInput,
  LoginResult,
  LogoutResult,
  RefreshAccessTokenResult,
  RegisterInput,
  RegisterResult
} from '../dto/auth.dto';
import type { AuthUseCasePort } from '../ports/auth-use-case.port';
import type { AuthUser, SafeAuthUser } from '../../domain/entities/auth-user';
import type { AuthRepositoryPort } from '../../domain/repositories/auth.repository';
import { ConflictError, UnauthorizedError } from '@/shared/errors';


interface AccessTokenPayload {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}
interface RefreshTokenPayload extends AccessTokenPayload {
  tokenId: string;
}

export class AuthUseCase implements AuthUseCasePort {
  constructor(
    private readonly repository: AuthRepositoryPort,
    private readonly jwt: FastifyInstance['jwt']
  ) {}

  async login(input: LoginInput, context: AuthSessionContext): Promise<LoginResult> {
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
    
    await this.repository.createSession({
      userId: user.id,
      sessionToken: refreshToken,
      ipAddress: context.ipAddress,
      userAgent: context.userAgent,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    });

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

  async logout(refreshToken?: string): Promise<LogoutResult> {
    if (refreshToken) {
      await this.repository.revokeSessionByToken(refreshToken);
    }

    return {
      message: 'User logged out successfully'
    };
  }

  async refreshAccessToken(
    refreshToken: string | undefined,
    context: AuthSessionContext
  ): Promise<RefreshAccessTokenResult> {
    if (!refreshToken) {
      throw new UnauthorizedError('Refresh token is required', {
        code: 'REFRESH_TOKEN_REQUIRED'
      });
    }

    const session = await this.repository.findActiveSessionByToken(refreshToken);
    if (!session) {
      throw new UnauthorizedError('Refresh session is invalid or expired', {
        code: 'INVALID_REFRESH_SESSION'
      });
    }

    let payload: RefreshTokenPayload;
    try {
      payload = this.jwt.verify<RefreshTokenPayload>(refreshToken);
    } catch {
      throw new UnauthorizedError('Refresh token is invalid or expired', {
        code: 'INVALID_REFRESH_TOKEN'
      });
    }

    if (payload.userId !== session.userId) {
      throw new UnauthorizedError('Refresh token does not match session', {
        code: 'REFRESH_TOKEN_SESSION_MISMATCH'
      });
    }

    const user = await this.repository.findById(session.userId);
    if (!user) {
      throw new UnauthorizedError('User not found for refresh session', {
        code: 'REFRESH_USER_NOT_FOUND'
      });
    }

    const nextPayload = this.buildTokenPayload(user);
    const accessToken = this.generateAccessToken(nextPayload);
    const nextRefreshToken = this.generateRefreshToken(nextPayload);
    await this.repository.rotateSessionToken(refreshToken, nextRefreshToken, {
      ipAddress: context.ipAddress,
      userAgent: context.userAgent,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    });

    return {
      accessToken,
      refreshToken: nextRefreshToken
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
    return this.jwt.sign(
      {
        ...payload,
        tokenId: randomUUID()
      },
      { expiresIn: '7d' }
    );
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
