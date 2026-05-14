export interface AuthUser {
  id: string;
  email: string;
  name: string;
  passwordHash: string;
}

export type SafeAuthUser = Omit<AuthUser, 'passwordHash'>;
