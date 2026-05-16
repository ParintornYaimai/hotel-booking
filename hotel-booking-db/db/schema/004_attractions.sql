CREATE TABLE IF NOT EXISTS attractions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name varchar NOT NULL,
  description text,
  address varchar,
  province varchar,
  category varchar,
  latitude decimal(10,7),
  longitude decimal(10,7),
  is_trending boolean DEFAULT false,
  status varchar DEFAULT 'active',
  created_at timestamp,
  updated_at timestamp
);