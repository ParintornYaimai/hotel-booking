CREATE TABLE IF NOT EXISTS hotel_images (
  id integer PRIMARY KEY,
  hotel_id integer NOT NULL REFERENCES hotels (id),
  image_url varchar NOT NULL,
  is_cover boolean DEFAULT false,
  sort_order integer DEFAULT 0,
  created_at timestamp,
  updated_at timestamp,
  deleted_at timestamp
);
