import type { Pool } from 'pg';

import type { User } from '../../domain/entities/user';
import type { UserRepository } from '../../domain/repositories/user.repository';

interface UserRow {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  role: string;
}

function mapUser(row: UserRow): User {
  return {
    id: row.id,
    email: row.email,
    name: `${row.first_name} ${row.last_name}`.trim(),
    role: row.role
  };
}

export class PgUserRepository implements UserRepository {
  constructor(private readonly db: Pool) {}

  async list(): Promise<User[]> {
    const result = await this.db.query<UserRow>(
      `SELECT id::text, email, first_name, last_name, role
       FROM users
       WHERE deleted_at IS NULL
       ORDER BY created_at DESC NULLS LAST`
    );

    return result.rows.map(mapUser);
  }

  async findById(userId: string): Promise<User | null> {
    const result = await this.db.query<UserRow>(
      `SELECT id::text, email, first_name, last_name, role
       FROM users
       WHERE deleted_at IS NULL
         AND id::text = $1
       LIMIT 1`,
      [userId]
    );

    if (result.rowCount === 0) {
      return null;
    }

    return mapUser(result.rows[0]);
  }
}
