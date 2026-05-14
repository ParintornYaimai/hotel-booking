import type { User } from '../../domain/entities/user';
import type { UserRepository } from '../../domain/repositories/user.repository';

export class ListUsersUseCase {
  constructor(private readonly repository: UserRepository) {}

  execute(): Promise<User[]> {
    return this.repository.list();
  }
}
