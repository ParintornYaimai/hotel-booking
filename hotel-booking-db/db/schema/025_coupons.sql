CREATE TABLE IF NOT EXISTS coupons (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code varchar NOT NULL UNIQUE,
  name varchar,
  description varchar,
  discount_type varchar NOT NULL,
  discount_value decimal(10,2) NOT NULL,
  min_spend decimal(10,2),
  max_discount decimal(10,2),
  usage_limit integer,
  usage_per_user integer,
  starts_at timestamp,
  ends_at timestamp,
  status varchar DEFAULT 'active',
  created_at timestamp,
  updated_at timestamp,
  deleted_at timestamp
);

