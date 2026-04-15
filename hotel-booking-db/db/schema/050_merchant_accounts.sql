CREATE TABLE IF NOT EXISTS merchant_accounts (
  id integer PRIMARY KEY,
  payment_gateway_id integer REFERENCES payment_gateways (id),
  merchant_name varchar,
  merchant_id varchar,
  status varchar DEFAULT 'active',
  created_at timestamp,
  updated_at timestamp
);

