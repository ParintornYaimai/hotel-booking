CREATE TABLE IF NOT EXISTS facilities (
  id integer PRIMARY KEY,
  name varchar NOT NULL,
  name_th varchar,
  icon varchar,
  created_at timestamp,
  updated_at timestamp
);
