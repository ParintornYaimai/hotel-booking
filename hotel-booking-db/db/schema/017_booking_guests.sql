CREATE TABLE IF NOT EXISTS booking_guests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id uuid NOT NULL REFERENCES bookings (id),
  first_name varchar NOT NULL,
  last_name varchar NOT NULL,
  guest_type varchar NOT NULL,
  created_at timestamp,
  updated_at timestamp
);
