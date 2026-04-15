CREATE TABLE IF NOT EXISTS admin_user_roles (
  id integer PRIMARY KEY,
  user_id integer NOT NULL REFERENCES users (id),
  role_id integer NOT NULL REFERENCES roles (id),
  created_at timestamp,
  updated_at timestamp,
  CONSTRAINT admin_user_roles_user_id_role_id_key UNIQUE (user_id, role_id)
);

