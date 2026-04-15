CREATE TABLE IF NOT EXISTS currencies (
  id integer PRIMARY KEY,
  code varchar NOT NULL UNIQUE,
  name varchar,
  symbol varchar,
  created_at timestamp,
  updated_at timestamp
);

