import type {
  LoginInput,
  LoginResult,
  RegisterInput,
  RegisterResult
} from '../dto/auth.dto';

export interface AuthUseCasePort {
  login(input: LoginInput): Promise<LoginResult>;
  register(input: RegisterInput): Promise<RegisterResult>;
}
