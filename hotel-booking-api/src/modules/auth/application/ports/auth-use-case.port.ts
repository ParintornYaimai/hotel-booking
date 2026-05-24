import type { LoginInput } from '../dto/auth.dto';
import type { LoginResult } from '../dto/auth.dto';

export interface AuthUseCasePort {
  login(input: LoginInput): Promise<LoginResult>;
}
