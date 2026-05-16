-- admin_user_roles maps admin/backoffice users to fine-grained RBAC roles.
CREATE TABLE IF NOT EXISTS admin_user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users (id),
  role_id uuid NOT NULL REFERENCES roles (id),
  created_at timestamp,
  updated_at timestamp,
  CONSTRAINT admin_user_roles_user_id_role_id_key UNIQUE (user_id, role_id)
    );

