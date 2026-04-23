CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users (id),
  hotel_id uuid NOT NULL REFERENCES hotels (id),
  booking_id uuid REFERENCES bookings (id),
  rating integer NOT NULL,
  comment varchar,
  created_at timestamp,
  updated_at timestamp,
  deleted_at timestamp
);
