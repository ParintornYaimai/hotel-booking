import type { LoginInput } from '../dto/login.dto';
import type { LoginResult } from '../dto/login-result.dto';
import type { AuthRepository } from '../../domain/repositories/auth.repository';

export class LoginUseCase {
  constructor(private readonly repository: AuthRepository) {}

  async execute(input: LoginInput): Promise<LoginResult | null> {
    const user = await this.repository.findByEmail(input.email);
    if (!user) {
      return null;
    }

    const isValidPassword = await this.repository.verifyPassword(
      input.password,
      user.passwordHash
    );

    if (!isValidPassword) {
      return null;
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
