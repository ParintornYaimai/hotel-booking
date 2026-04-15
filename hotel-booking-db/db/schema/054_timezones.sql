CREATE TABLE IF NOT EXISTS timezones (
  id integer PRIMARY KEY,
  name varchar NOT NULL UNIQUE,
  utc_offset varchar,
  created_at timestamp,
  updated_at timestamp
);

