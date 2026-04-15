CREATE TABLE IF NOT EXISTS invoices (
  id integer PRIMARY KEY,
  booking_id integer REFERENCES bookings (id),
  payment_id integer REFERENCES payments (id),
  billing_profile_id integer REFERENCES billing_profiles (id),
  invoice_number varchar UNIQUE,
  type varchar DEFAULT 'receipt',
  file_url varchar,
  issued_at timestamp,
  created_at timestamp,
  updated_at timestamp
);

