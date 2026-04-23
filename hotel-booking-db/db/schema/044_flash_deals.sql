CREATE TABLE IF NOT EXISTS flash_deals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  hotel_id uuid REFERENCES hotels (id),
  title varchar NOT NULL,
  description varchar,
  discount_percent decimal(5,2),
  start_at timestamp,
  end_at timestamp,
  is_active boolean DEFAULT true,
  created_at timestamp,
  updated_at timestamp
);

