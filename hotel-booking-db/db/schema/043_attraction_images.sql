CREATE TABLE IF NOT EXISTS attraction_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  attraction_id uuid NOT NULL REFERENCES attractions (id),
  image_url varchar NOT NULL,
  thumbnail_url varchar,
  is_cover boolean DEFAULT false,
  sort_order integer DEFAULT 0,
  created_at timestamp,
  updated_at timestamp
);

