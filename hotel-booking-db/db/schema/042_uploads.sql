CREATE TABLE IF NOT EXISTS uploads (
  id integer PRIMARY KEY,
  file_name varchar NOT NULL,
  file_url varchar NOT NULL,
  file_type varchar,
  mime_type varchar,
  file_size integer,
  uploaded_by integer REFERENCES users (id),
  created_at timestamp,
  updated_at timestamp
);

