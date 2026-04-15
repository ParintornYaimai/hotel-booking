CREATE TABLE IF NOT EXISTS audit_logs (
  id integer PRIMARY KEY,
  user_id integer REFERENCES users (id),
  entity_type varchar NOT NULL,
  entity_id integer,
  action varchar NOT NULL,
  before_data text,
  after_data text,
  created_at timestamp
);

