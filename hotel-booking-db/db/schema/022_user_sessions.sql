CREATE TABLE IF NOT EXISTS user_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users (id),
  session_token varchar NOT NULL UNIQUE,
  ip_address varchar,
  user_agent varchar,
  last_active_at timestamp,
  expires_at timestamp,
  created_at timestamp,
  updated_at timestamp
);

