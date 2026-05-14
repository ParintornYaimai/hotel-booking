import type { AuthTokens } from '../../domain/entities/auth-tokens';
import type { SafeAuthUser } from '../../domain/entities/auth-user';

export interface LoginResult {
  user: SafeAuthUser;
  tokens: AuthTokens;
}
