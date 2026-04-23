CREATE TABLE IF NOT EXISTS merchant_accounts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  payment_gateway_id uuid REFERENCES payment_gateways (id),
  merchant_name varchar,
  merchant_id varchar,
  status varchar DEFAULT 'active',
  created_at timestamp,
  updated_at timestamp
);

