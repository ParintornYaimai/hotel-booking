CREATE TABLE IF NOT EXISTS pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug varchar NOT NULL UNIQUE,
  title varchar NOT NULL,
  content text,
  status varchar DEFAULT 'published',
  created_at timestamp,
  updated_at timestamp
);

