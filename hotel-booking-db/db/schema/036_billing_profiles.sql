CREATE TABLE IF NOT EXISTS billing_profiles (
  id integer PRIMARY KEY,
  user_id integer REFERENCES users (id),
  booking_id integer REFERENCES bookings (id),
  company_name varchar,
  tax_number varchar,
  address varchar,
  province varchar,
  country varchar,
  postal_code varchar,
  created_at timestamp,
  updated_at timestamp
);

