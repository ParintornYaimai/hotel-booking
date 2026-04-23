CREATE TABLE IF NOT EXISTS system_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  setting_key varchar NOT NULL UNIQUE,
  setting_value text,
  created_at timestamp,
  updated_at timestamp
);

