import type { Pool } from 'pg';
import type { AuthUser } from '../../domain/entities/auth-user';
import type {
  AuthSession,
  AuthRepositoryPort,
  CreateAuthUserInput,
  CreateUserSessionInput
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

interface UserSessionRow {
  user_id: string;
  session_token: string;
  ip_address: string | null;
  user_agent: string | null;
  last_active_at: Date | null;
  revoked_at: Date | null;
  expires_at: Date | null;
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

    return this.mapAuthUser(result.rows[0]);
  }

  async findById(userId: string): Promise<AuthUser | null> {
    const result = await this.db.query<AuthUserRow>(
      `SELECT id::text, email, username, first_name, last_name, password_hash,
              phone_number, phone_country_code, avatar_url, role, status,
              is_email_verified, last_login_at, created_at, updated_at, deleted_at
       FROM users
       WHERE deleted_at IS NULL
         AND id::text = $1
       LIMIT 1`,
      [userId]
    );

    if (result.rowCount === 0) {
      return null;
    }

    return this.mapAuthUser(result.rows[0]);
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

    return this.mapAuthUser(result.rows[0]);
  }

  async createSession(input: CreateUserSessionInput): Promise<void> {
    await this.db.query(
      `INSERT INTO user_sessions (
         user_id,
         session_token,
         ip_address,
         user_agent,
         last_active_at,
         revoked_at,
         expires_at,
         created_at,
         updated_at
       )
       VALUES ($1::uuid, $2, $3, $4, CURRENT_TIMESTAMP, NULL, $5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`,
      [
        input.userId,
        input.sessionToken,
        input.ipAddress,
        input.userAgent,
        input.expiresAt
      ]
    );
  }

  async findActiveSessionByToken(sessionToken: string): Promise<AuthSession | null> {
    const result = await this.db.query<UserSessionRow>(
      `SELECT user_id::text, session_token, ip_address, user_agent,
              last_active_at, revoked_at, expires_at
       FROM user_sessions
       WHERE session_token = $1
         AND revoked_at IS NULL
         AND (expires_at IS NULL OR expires_at > CURRENT_TIMESTAMP)
       LIMIT 1`,
      [sessionToken]
    );

    if (result.rowCount === 0) {
      return null;
    }

    return this.mapAuthSession(result.rows[0]);
  }

  async rotateSessionToken(
    currentSessionToken: string,
    nextSessionToken: string,
    context: Pick<CreateUserSessionInput, 'ipAddress' | 'userAgent' | 'expiresAt'>
  ): Promise<void> {
    await this.db.query(
      `UPDATE user_sessions
       SET session_token = $2,
           ip_address = $3,
           user_agent = $4,
           last_active_at = CURRENT_TIMESTAMP,
           expires_at = $5,
           updated_at = CURRENT_TIMESTAMP
       WHERE session_token = $1
         AND revoked_at IS NULL`,
      [
        currentSessionToken,
        nextSessionToken,
        context.ipAddress,
        context.userAgent,
        context.expiresAt
      ]
    );
  }

  async revokeSessionByToken(sessionToken: string): Promise<void> {
    await this.db.query(
      `UPDATE user_sessions
       SET revoked_at = CURRENT_TIMESTAMP,
           updated_at = CURRENT_TIMESTAMP
       WHERE session_token = $1
         AND revoked_at IS NULL`,
      [sessionToken]
    );
  }

  private mapAuthUser(row: AuthUserRow): AuthUser {
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

  private mapAuthSession(row: UserSessionRow): AuthSession {
    return {
      userId: row.user_id,
      sessionToken: row.session_token,
      ipAddress: row.ip_address,
      userAgent: row.user_agent,
      lastActiveAt: row.last_active_at,
      revokedAt: row.revoked_at,
      expiresAt: row.expires_at
    };
  }
}
