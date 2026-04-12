CREATE TABLE IF NOT EXISTS hotel_facilities (
  id integer PRIMARY KEY,
  hotel_id integer NOT NULL REFERENCES hotels (id),
  facility_id integer NOT NULL REFERENCES facilities (id),
  created_at timestamp,
  updated_at timestamp,
  CONSTRAINT hotel_facilities_hotel_id_facility_id_key UNIQUE (hotel_id, facility_id)
);
