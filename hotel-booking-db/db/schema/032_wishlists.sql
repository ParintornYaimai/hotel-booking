CREATE TABLE IF NOT EXISTS wishlists (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users (id),
  hotel_id uuid NOT NULL REFERENCES hotels (id),
  created_at timestamp,
  updated_at timestamp,
  deleted_at timestamp,
  CONSTRAINT wishlists_user_id_hotel_id_key UNIQUE (user_id, hotel_id)
);

