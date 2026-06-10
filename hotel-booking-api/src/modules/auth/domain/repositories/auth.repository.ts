import type { AuthUser } from '../entities/auth-user';

export interface CreateAuthUserInput {
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
}

export interface CreateUserSessionInput {
  userId: string;
  sessionToken: string;
  ipAddress: string | null;
  userAgent: string | null;
  expiresAt: Date;
}

export interface AuthSession {
  userId: string;
  sessionToken: string;
  ipAddress: string | null;
  userAgent: string | null;
  lastActiveAt: Date | null;
  revokedAt: Date | null;
  expiresAt: Date | null;
}

export interface AuthRepositoryPort {
  findByEmail(email: string): Promise<AuthUser | null>;
  findById(userId: string): Promise<AuthUser | null>;
  create(input: CreateAuthUserInput): Promise<AuthUser>;
  createSession(input: CreateUserSessionInput): Promise<void>;
  findActiveSessionByToken(sessionToken: string): Promise<AuthSession | null>;
  rotateSessionToken(
    currentSessionToken: string,
    nextSessionToken: string,
    context: Pick<CreateUserSessionInput, 'ipAddress' | 'userAgent' | 'expiresAt'>
  ): Promise<void>;
  revokeSessionByToken(sessionToken: string): Promise<void>;
}
