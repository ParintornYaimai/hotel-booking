CREATE TABLE IF NOT EXISTS revenue_targets (
  id integer PRIMARY KEY,
  month varchar NOT NULL,
  target_amount decimal(10,2) NOT NULL,
  created_at timestamp,
  updated_at timestamp
);

