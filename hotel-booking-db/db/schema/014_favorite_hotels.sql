CREATE TABLE IF NOT EXISTS favorite_hotels (
  id integer PRIMARY KEY,
  user_id integer NOT NULL REFERENCES users (id),
  hotel_id integer NOT NULL REFERENCES hotels (id),
  created_at timestamp,
  updated_at timestamp,
  deleted_at timestamp,
  CONSTRAINT favorite_hotels_user_id_hotel_id_key UNIQUE (user_id, hotel_id)
);
