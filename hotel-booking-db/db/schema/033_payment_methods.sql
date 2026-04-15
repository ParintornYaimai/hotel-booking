CREATE TABLE IF NOT EXISTS payment_methods (
  id integer PRIMARY KEY,
  code varchar NOT NULL UNIQUE,
  name varchar NOT NULL,
  is_active boolean DEFAULT true,
  created_at timestamp,
  updated_at timestamp
);

