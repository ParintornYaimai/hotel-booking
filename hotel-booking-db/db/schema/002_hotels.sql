CREATE TABLE IF NOT EXISTS hotels (
  id integer PRIMARY KEY,
  name varchar NOT NULL,
  description varchar,
  address varchar,
  province varchar,
  latitude decimal(10,7),
  longitude decimal(10,7),
  rating decimal(2,1),
  created_at timestamp,
  updated_at timestamp,
  deleted_at timestamp
);
