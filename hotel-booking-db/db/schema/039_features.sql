CREATE TABLE IF NOT EXISTS features (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title varchar NOT NULL,
  description text,
  icon varchar,
  sort_order integer DEFAULT 0,
  created_at timestamp,
  updated_at timestamp
);

