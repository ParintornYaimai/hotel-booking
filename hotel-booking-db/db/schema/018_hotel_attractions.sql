CREATE TABLE IF NOT EXISTS hotel_attractions (
  id integer PRIMARY KEY,
  hotel_id integer NOT NULL REFERENCES hotels (id),
  attraction_id integer NOT NULL REFERENCES attractions (id),
  distance_km decimal(5,2),
  created_at timestamp,
  updated_at timestamp,
  CONSTRAINT hotel_attractions_hotel_id_attraction_id_key UNIQUE (hotel_id, attraction_id)
);
