CREATE TABLE IF NOT EXISTS booking_guests (
  id integer PRIMARY KEY,
  booking_id integer NOT NULL REFERENCES bookings (id),
  first_name varchar NOT NULL,
  last_name varchar NOT NULL,
  guest_type varchar NOT NULL,
  created_at timestamp,
  updated_at timestamp
);
