CREATE TABLE IF NOT EXISTS payment_gateways (
  id integer PRIMARY KEY,
  name varchar NOT NULL,
  code varchar NOT NULL UNIQUE,
  is_active boolean DEFAULT true,
  created_at timestamp,
  updated_at timestamp
);

