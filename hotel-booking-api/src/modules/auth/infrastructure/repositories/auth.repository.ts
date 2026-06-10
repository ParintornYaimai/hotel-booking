import type { Pool } from 'pg';
import type { AuthUser } from '../../domain/entities/auth-user';
import type {
  AuthRepositoryPort,
  CreateAuthUserInput
} from '../../domain/repositories/auth.repository';

interface AuthUserRow {
  id: string;
  email: string;
  username: string | null;
  first_name: string;
  last_name: string;
  password_hash: string;
  phone_number: string | null;
  phone_country_code: string | null;
  avatar_url: string | null;
  role: string;
  status: string;
  is_email_verified: boolean;
  last_login_at: Date | null;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
}

function mapAuthUser(row: AuthUserRow): AuthUser {
  return {
    id: row.id,
    email: row.email,
    username: row.username,
    first_name: row.first_name,
    last_name: row.last_name,
    password_hash: row.password_hash,
    phone_number: row.phone_number,
    phone_country_code: row.phone_country_code,
    avatar_url: row.avatar_url,
    role: row.role,
    status: row.status,
    is_email_verified: row.is_email_verified,
    last_login_at: row.last_login_at,
    created_at: row.created_at,
    updated_at: row.updated_at,
    deleted_at: row.deleted_at
  };
}

export class AuthRepository implements AuthRepositoryPort {
  constructor(private readonly db: Pool) {}

  async findByEmail(email: string): Promise<AuthUser | null> {
    const result = await this.db.query<AuthUserRow>(
      `SELECT id::text, email, username, first_name, last_name, password_hash,
              phone_number, phone_country_code, avatar_url, role, status,
              is_email_verified, last_login_at, created_at, updated_at, deleted_at
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

  async create(input: CreateAuthUserInput): Promise<AuthUser> {
    const result = await this.db.query<AuthUserRow>(
      `INSERT INTO users (
         email,
         first_name,
         last_name,
         password_hash,
         role,
         status,
         is_email_verified,
         created_at,
         updated_at
       )
       VALUES ($1, $2, $3, $4, 'customer', 'active', false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
       RETURNING id::text, email, username, first_name, last_name, password_hash,
                 phone_number, phone_country_code, avatar_url, role, status,
                 is_email_verified, last_login_at, created_at, updated_at, deleted_at`,
      [
        input.email,
        input.firstName,
        input.lastName,
        input.passwordHash
      ]
    );

    return mapAuthUser(result.rows[0]);
  }
}
