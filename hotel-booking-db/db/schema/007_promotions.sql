CREATE TABLE IF NOT EXISTS promotions (
  id integer PRIMARY KEY,
  hotel_id integer REFERENCES hotels (id),
  room_type_id integer REFERENCES room_types (id),
  name varchar,
  description varchar,
  discount_type varchar,
  discount_value decimal(10,2),
  start_date date,
  end_date date,
  is_active boolean DEFAULT true,
  created_at timestamp,
  updated_at timestamp,
  deleted_at timestamp
);
