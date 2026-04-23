CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email varchar NOT NULL UNIQUE,
  username varchar UNIQUE,
  first_name varchar NOT NULL,
  last_name varchar NOT NULL,
  password_hash varchar NOT NULL,
  phone_number varchar,
  role varchar NOT NULL DEFAULT 'customer',
  status varchar NOT NULL DEFAULT 'active',
  created_at timestamp,
  updated_at timestamp,
  deleted_at timestamp
);
