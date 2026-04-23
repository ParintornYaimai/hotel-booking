CREATE TABLE IF NOT EXISTS admin_invitations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email varchar NOT NULL,
  role_id uuid REFERENCES roles (id),
  token varchar NOT NULL UNIQUE,
  status varchar NOT NULL DEFAULT 'pending',
  expires_at timestamp,
  invited_by uuid REFERENCES users (id),
  accepted_at timestamp,
  created_at timestamp,
  updated_at timestamp
);

