export interface AuthUser {
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
export interface CreateAuthUserInput {
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
}

export type SafeAuthUser = Omit<AuthUser, 'password_hash'>;
