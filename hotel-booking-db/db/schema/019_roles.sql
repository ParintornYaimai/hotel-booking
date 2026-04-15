CREATE TABLE IF NOT EXISTS roles (
  id integer PRIMARY KEY,
  name varchar NOT NULL UNIQUE,
  description varchar,
  created_at timestamp,
  updated_at timestamp
);

