CREATE TABLE IF NOT EXISTS system_settings (
  id integer PRIMARY KEY,
  setting_key varchar NOT NULL UNIQUE,
  setting_value text,
  created_at timestamp,
  updated_at timestamp
);

