import type { AuthUser } from '../entities/auth-user';

export interface CreateAuthUserInput {
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
}

export interface AuthRepositoryPort {
  findByEmail(email: string): Promise<AuthUser | null>;
  create(input: CreateAuthUserInput): Promise<AuthUser>;
}
