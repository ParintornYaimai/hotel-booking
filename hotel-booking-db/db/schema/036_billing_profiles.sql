CREATE TABLE IF NOT EXISTS billing_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users (id),
  booking_id uuid REFERENCES bookings (id),
  company_name varchar,
  tax_number varchar,
  address varchar,
  province varchar,
  country varchar,
  postal_code varchar,
  created_at timestamp,
  updated_at timestamp
);

