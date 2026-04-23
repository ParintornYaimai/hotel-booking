CREATE TABLE IF NOT EXISTS audit_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users (id),
  entity_type varchar NOT NULL,
  entity_id uuid,
  action varchar NOT NULL,
  before_data text,
  after_data text,
  created_at timestamp
);

