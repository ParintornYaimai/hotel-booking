CREATE TABLE IF NOT EXISTS room_types (
  id integer PRIMARY KEY,
  hotel_id integer NOT NULL REFERENCES hotels (id),
  name varchar NOT NULL,
  description varchar,
  capacity_adults integer,
  capacity_children integer,
  bed_type varchar,
  size_sq_m integer,
  total_rooms integer NOT NULL,
  created_at timestamp,
  updated_at timestamp,
  deleted_at timestamp
);
