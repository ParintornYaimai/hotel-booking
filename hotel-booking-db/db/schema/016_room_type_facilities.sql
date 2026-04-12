CREATE TABLE IF NOT EXISTS room_type_facilities (
  id integer PRIMARY KEY,
  room_type_id integer NOT NULL REFERENCES room_types (id),
  facility_id integer NOT NULL REFERENCES facilities (id),
  created_at timestamp,
  updated_at timestamp,
  CONSTRAINT room_type_facilities_room_type_id_facility_id_key UNIQUE (room_type_id, facility_id)
);
