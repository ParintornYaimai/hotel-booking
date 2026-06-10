import type {
  AuthSessionContext,
  LoginInput,
  LoginResult,
  LogoutResult,
  RefreshAccessTokenResult,
  RegisterInput,
  RegisterResult
} from '../dto/auth.dto';

export interface AuthUseCasePort {
  login(input: LoginInput, context: AuthSessionContext): Promise<LoginResult>;
  register(input: RegisterInput): Promise<RegisterResult>;
  logout(refreshToken?: string): Promise<LogoutResult>;
  refreshAccessToken(
    refreshToken: string | undefined,
    context: AuthSessionContext
  ): Promise<RefreshAccessTokenResult>;
}
