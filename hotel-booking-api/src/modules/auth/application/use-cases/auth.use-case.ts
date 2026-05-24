import type { LoginInput } from '../dto/auth.dto';
import type { LoginResult } from '../dto/auth.dto';
import type { AuthUseCasePort } from '../ports/auth-use-case.port';
import type { AuthRepositoryPort } from '../../domain/repositories/auth.repository';
import { UnauthorizedError } from '../../../../shared/errors';

export class AuthUseCase implements AuthUseCasePort {
  constructor(private readonly repository: AuthRepositoryPort) {}

  async login(input: LoginInput): Promise<LoginResult> {
    const user = await this.repository.findByEmail(input.email);
    if (!user) {
      throw new UnauthorizedError('Invalid email or password', {
        code: 'INVALID_CREDENTIALS'
      });
    }

    const isValidPassword = await this.repository.verifyPassword(
      input.password,
      user.passwordHash
    );

    if (!isValidPassword) {
      throw new UnauthorizedError('Invalid email or password', {
        code: 'INVALID_CREDENTIALS'
      });
    }

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name
      },
      tokens: this.repository.issueTokens(user)
    };
  }
}
