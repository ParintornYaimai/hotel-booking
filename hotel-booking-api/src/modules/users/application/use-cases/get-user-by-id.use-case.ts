import type { User } from '../../domain/entities/user';
import type { UserRepository } from '../../domain/repositories/user.repository';
import { NotFoundError } from '@/shared/errors';

export class userUseCase {
  constructor(private readonly repository: UserRepository) {}

  async execute(userId: string): Promise<User> {
    const user = await this.repository.findById(userId);
    if (!user) {
      throw new NotFoundError('User not found', {
        code: 'USER_NOT_FOUND',
        details: { userId }
      });
    }

    return user;
  }
}
