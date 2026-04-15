CREATE TABLE IF NOT EXISTS categories (
  id integer PRIMARY KEY,
  name varchar NOT NULL,
  slug varchar NOT NULL UNIQUE,
  description varchar,
  icon varchar,
  created_at timestamp,
  updated_at timestamp
);

