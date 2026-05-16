CREATE TABLE IF NOT EXISTS room_types (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  hotel_id uuid NOT NULL REFERENCES hotels (id),
  name varchar NOT NULL,
  description text,
  capacity_adults integer,
  capacity_children integer,
  max_occupancy integer,
  bed_type varchar,
  size_sq_m integer,
  total_rooms integer NOT NULL,
  status varchar DEFAULT 'active',
  sort_order integer DEFAULT 0,
  created_at timestamp,
  updated_at timestamp,
  deleted_at timestamp
);