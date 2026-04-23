CREATE TABLE IF NOT EXISTS promotions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  hotel_id uuid REFERENCES hotels (id),
  room_type_id uuid REFERENCES room_types (id),
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
