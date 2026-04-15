CREATE TABLE IF NOT EXISTS gateway_test_logs (
  id integer PRIMARY KEY,
  payment_gateway_id integer REFERENCES payment_gateways (id),
  tested_by integer REFERENCES users (id),
  status varchar,
  response_message varchar,
  tested_at timestamp,
  created_at timestamp
);

