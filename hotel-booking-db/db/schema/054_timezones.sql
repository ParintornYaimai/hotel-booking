CREATE TABLE IF NOT EXISTS timezones (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name varchar NOT NULL UNIQUE,
  utc_offset varchar,
  created_at timestamp,
  updated_at timestamp
);

