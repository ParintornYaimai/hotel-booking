import type { AuthTokens } from '../../domain/entities/auth-tokens';
import type { SafeAuthUser } from '../../domain/entities/auth-user';

export interface LoginInput {
  email: string;
  password: string;
}
export interface LoginResult {
  user: SafeAuthUser;
  tokens: AuthTokens;
}

export interface RegisterInput{
  firstName: string;
  lastName: string;
  email: string;
  password: string;  
}

export interface RegisterResult {
  message: string;
}
