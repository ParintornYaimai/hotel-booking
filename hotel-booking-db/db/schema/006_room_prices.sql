CREATE TABLE IF NOT EXISTS room_prices (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  room_type_id uuid NOT NULL REFERENCES room_types (id),
  price decimal(10,2) NOT NULL,
  start_date date NOT NULL,
  end_date date NOT NULL,
  created_at timestamp,
  updated_at timestamp,
  deleted_at timestamp
);
