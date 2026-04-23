CREATE TABLE IF NOT EXISTS revenue_targets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  month varchar NOT NULL,
  target_amount decimal(10,2) NOT NULL,
  created_at timestamp,
  updated_at timestamp
);

