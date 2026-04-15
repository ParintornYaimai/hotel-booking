CREATE TABLE IF NOT EXISTS booking_rooms (
  id integer PRIMARY KEY,
  booking_id integer NOT NULL REFERENCES bookings (id),
  room_type_id integer NOT NULL REFERENCES room_types (id),
  room_name_snapshot varchar,
  quantity integer NOT NULL DEFAULT 1,
  price_per_night decimal(10,2),
  nights integer DEFAULT 1,
  subtotal_amount decimal(10,2),
  created_at timestamp,
  updated_at timestamp
);

