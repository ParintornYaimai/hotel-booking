import type { AuthTokens } from '../entities/auth-tokens';
import type { AuthUser } from '../entities/auth-user';

export interface AuthRepository {
  findByEmail(email: string): Promise<AuthUser | null>;
  verifyPassword(plainPassword: string, passwordHash: string): Promise<boolean>;
  issueTokens(user: AuthUser): AuthTokens;
}
