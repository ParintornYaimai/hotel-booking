CREATE TABLE IF NOT EXISTS payment_gateways (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name varchar NOT NULL,
  code varchar NOT NULL UNIQUE,
  is_active boolean DEFAULT true,
  created_at timestamp,
  updated_at timestamp
);

