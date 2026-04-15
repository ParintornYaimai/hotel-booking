CREATE TABLE IF NOT EXISTS destinations (
  id integer PRIMARY KEY,
  name varchar NOT NULL,
  slug varchar NOT NULL UNIQUE,
  type varchar DEFAULT 'hotel',
  description varchar,
  country varchar,
  province varchar,
  cover_image_url varchar,
  is_popular boolean DEFAULT false,
  created_at timestamp,
  updated_at timestamp,
  deleted_at timestamp
);

