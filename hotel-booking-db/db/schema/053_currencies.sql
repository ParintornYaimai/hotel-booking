CREATE TABLE IF NOT EXISTS currencies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code varchar NOT NULL UNIQUE,
  name varchar,
  symbol varchar,
  created_at timestamp,
  updated_at timestamp
);

