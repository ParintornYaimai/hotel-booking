CREATE TABLE IF NOT EXISTS attractions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name varchar NOT NULL,
  description varchar,
  address varchar,
  latitude decimal(10,7),
  longitude decimal(10,7),
  created_at timestamp,
  updated_at timestamp
);
