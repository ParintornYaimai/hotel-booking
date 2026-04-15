CREATE TABLE IF NOT EXISTS admin_invitations (
  id integer PRIMARY KEY,
  email varchar NOT NULL,
  role_id integer REFERENCES roles (id),
  token varchar NOT NULL UNIQUE,
  status varchar NOT NULL DEFAULT 'pending',
  expires_at timestamp,
  invited_by integer REFERENCES users (id),
  accepted_at timestamp,
  created_at timestamp,
  updated_at timestamp
);

