CREATE TABLE IF NOT EXISTS gateway_test_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  payment_gateway_id uuid REFERENCES payment_gateways (id),
  tested_by uuid REFERENCES users (id),
  status varchar,
  response_message varchar,
  tested_at timestamp,
  created_at timestamp
);

