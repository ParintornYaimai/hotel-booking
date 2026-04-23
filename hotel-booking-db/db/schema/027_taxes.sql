CREATE TABLE IF NOT EXISTS taxes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name varchar NOT NULL,
  type varchar NOT NULL,
  value decimal(10,2) NOT NULL,
  is_active boolean DEFAULT true,
  created_at timestamp,
  updated_at timestamp
);

