CREATE TABLE IF NOT EXISTS features (
  id integer PRIMARY KEY,
  title varchar NOT NULL,
  description text,
  icon varchar,
  sort_order integer DEFAULT 0,
  created_at timestamp,
  updated_at timestamp
);

