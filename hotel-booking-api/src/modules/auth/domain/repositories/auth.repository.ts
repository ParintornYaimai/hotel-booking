import type { AuthUser } from '../entities/auth-user';

export interface AuthRepositoryPort {
  findByEmail(email: string): Promise<AuthUser | null>;
}
