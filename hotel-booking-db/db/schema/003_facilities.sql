CREATE TABLE IF NOT EXISTS facilities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name varchar NOT NULL,
  name_th varchar,
  icon varchar,
  category varchar,
  created_at timestamp,
  updated_at timestamp
);