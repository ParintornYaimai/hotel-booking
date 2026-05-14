import type { AuthTokens } from '../../domain/entities/auth-tokens';
import type { AuthUser } from '../../domain/entities/auth-user';
import type { AuthRepository } from '../../domain/repositories/auth.repository';

const IN_MEMORY_USERS: AuthUser[] = [
  {
    id: 'user_1',
    email: 'demo@hotel-booking.local',
    name: 'Demo User',
    passwordHash: 'password123'
  }
];

export class InMemoryAuthRepository implements AuthRepository {
  async findByEmail(email: string): Promise<AuthUser | null> {
    const user = IN_MEMORY_USERS.find(
      (candidate) => candidate.email.toLowerCase() === email.toLowerCase()
    );
    return user ?? null;
  }

  async verifyPassword(
    plainPassword: string,
    passwordHash: string
  ): Promise<boolean> {
    // Starter logic: replace with bcrypt/argon2 in production.
    return plainPassword === passwordHash;
  }

  issueTokens(user: AuthUser): AuthTokens {
    const now = Date.now();
    const accessToken = Buffer.from(`${user.id}:${now}:access`).toString('base64');
    const refreshToken = Buffer.from(`${user.id}:${now}:refresh`).toString('base64');

    return {
      tokenType: 'Bearer',
      accessToken,
      refreshToken,
      expiresIn: 3600
    };
  }
}
