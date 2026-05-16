CREATE TABLE IF NOT EXISTS room_type_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  room_type_id uuid NOT NULL REFERENCES room_types (id),
  image_url varchar NOT NULL,
  thumbnail_url varchar,
  is_cover boolean DEFAULT false,
  sort_order integer DEFAULT 0,
  created_at timestamp,
  updated_at timestamp
);