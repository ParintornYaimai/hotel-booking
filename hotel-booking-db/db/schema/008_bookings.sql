CREATE TABLE IF NOT EXISTS bookings (
  id integer PRIMARY KEY,
  user_id integer REFERENCES users (id),
  hotel_id integer REFERENCES hotels (id),
  room_type_id integer NOT NULL REFERENCES room_types (id),
  promotion_id integer REFERENCES promotions (id),
  check_in date NOT NULL,
  check_out date NOT NULL,
  adult_count integer NOT NULL DEFAULT 0,
  child_count integer DEFAULT 0,
  has_pet boolean DEFAULT false,
  has_car boolean DEFAULT false,
  room_count integer NOT NULL DEFAULT 1,
  total_price decimal(10,2),
  final_price decimal(10,2),
  status varchar DEFAULT 'pending',
  created_at timestamp,
  updated_at timestamp
);
