import type { User } from '../../domain/entities/user';
import type { UserRepository } from '../../domain/repositories/user.repository';

export class GetUserByIdUseCase {
  constructor(private readonly repository: UserRepository) {}

  execute(userId: string): Promise<User | null> {
    return this.repository.findById(userId);
  }
}
