CREATE TABLE IF NOT EXISTS room_type_images (
  id integer PRIMARY KEY,
  room_type_id integer NOT NULL REFERENCES room_types (id),
  image_url varchar NOT NULL,
  is_cover boolean DEFAULT false,
  sort_order integer DEFAULT 0,
  created_at timestamp,
  updated_at timestamp
);
