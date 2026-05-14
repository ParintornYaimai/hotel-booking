import type { User } from '../../domain/entities/user';
import type { UserRepository } from '../../domain/repositories/user.repository';

const IN_MEMORY_USERS: User[] = [
  {
    id: 'user_1',
    email: 'demo@hotel-booking.local',
    name: 'Demo User',
    role: 'customer'
  },
  {
    id: 'admin_1',
    email: 'admin@hotel-booking.local',
    name: 'Admin User',
    role: 'admin'
  }
];

export class InMemoryUserRepository implements UserRepository {
  async list(): Promise<User[]> {
    return [...IN_MEMORY_USERS];
  }

  async findById(userId: string): Promise<User | null> {
    const user = IN_MEMORY_USERS.find((candidate) => candidate.id === userId);
    return user ?? null;
  }
}
