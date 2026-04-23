CREATE TABLE IF NOT EXISTS invoices (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id uuid REFERENCES bookings (id),
  payment_id uuid REFERENCES payments (id),
  billing_profile_id uuid REFERENCES billing_profiles (id),
  invoice_number varchar UNIQUE,
  type varchar DEFAULT 'receipt',
  file_url varchar,
  issued_at timestamp,
  created_at timestamp,
  updated_at timestamp
);

