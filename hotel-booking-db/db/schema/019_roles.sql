-- roles stores fine-grained RBAC roles for admin/backoffice access.
CREATE TABLE IF NOT EXISTS roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name varchar NOT NULL UNIQUE,
  description varchar,
  created_at timestamp,
  updated_at timestamp
);

