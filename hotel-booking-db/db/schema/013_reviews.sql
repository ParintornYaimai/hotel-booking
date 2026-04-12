CREATE TABLE IF NOT EXISTS reviews (
  id integer PRIMARY KEY,
  user_id integer NOT NULL REFERENCES users (id),
  hotel_id integer NOT NULL REFERENCES hotels (id),
  booking_id integer REFERENCES bookings (id),
  rating integer NOT NULL,
  comment varchar,
  created_at timestamp,
  updated_at timestamp,
  deleted_at timestamp
);
