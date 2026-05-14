import type { User } from '../entities/user';

export interface UserRepository {
  list(): Promise<User[]>;
  findById(userId: string): Promise<User | null>;
}
