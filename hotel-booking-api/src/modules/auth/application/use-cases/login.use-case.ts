import type { LoginInput } from '../dto/login.dto';
import type { LoginResult } from '../dto/login-result.dto';
import type { AuthRepository } from '../../domain/repositories/auth.repository';
import { UnauthorizedError } from '../../../../shared/errors';

export class LoginUseCase {
  constructor(private readonly repository: AuthRepository) {}

  async execute(input: LoginInput): Promise<LoginResult> {
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
