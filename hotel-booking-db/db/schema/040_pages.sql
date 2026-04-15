CREATE TABLE IF NOT EXISTS pages (
  id integer PRIMARY KEY,
  slug varchar NOT NULL UNIQUE,
  title varchar NOT NULL,
  content text,
  status varchar DEFAULT 'published',
  created_at timestamp,
  updated_at timestamp
);

