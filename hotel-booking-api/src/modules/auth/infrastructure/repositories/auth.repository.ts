import type { Pool } from 'pg';
import bcrypt from 'bcryptjs';

import type { AuthTokens } from '../../domain/entities/auth-tokens';
import type { AuthUser } from '../../domain/entities/auth-user';
import type { AuthRepositoryPort } from '../../domain/repositories/auth.repository';

interface AuthUserRow {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  password_hash: string;
}

function mapAuthUser(row: AuthUserRow): AuthUser {
  return {
    id: row.id,
    email: row.email,
    name: `${row.first_name} ${row.last_name}`.trim(),
    passwordHash: row.password_hash
  };
}

export class AuthRepository implements AuthRepositoryPort {
  constructor(private readonly db: Pool) {}

  async findByEmail(email: string): Promise<AuthUser | null> {
    const result = await this.db.query<AuthUserRow>(
      `SELECT id::text, email, first_name, last_name, password_hash
       FROM users
       WHERE deleted_at IS NULL
         AND email = $1
       LIMIT 1`,
      [email]
    );

    if (result.rowCount === 0) {
      return null;
    }

    return mapAuthUser(result.rows[0]);
  }

  async verifyPassword(
    plainPassword: string,
    passwordHash: string
  ): Promise<boolean> {
    try {
      return await bcrypt.compare(plainPassword, passwordHash);
    } catch {
      return false;
    }
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
