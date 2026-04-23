CREATE TABLE IF NOT EXISTS uploads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  file_name varchar NOT NULL,
  file_url varchar NOT NULL,
  file_type varchar,
  mime_type varchar,
  file_size integer,
  uploaded_by uuid REFERENCES users (id),
  created_at timestamp,
  updated_at timestamp
);

