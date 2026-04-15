CREATE TABLE IF NOT EXISTS banners (
  id integer PRIMARY KEY,
  page_key varchar NOT NULL,
  title varchar,
  subtitle varchar,
  image_url varchar,
  cta_label varchar,
  cta_link varchar,
  is_active boolean DEFAULT true,
  sort_order integer DEFAULT 0,
  created_at timestamp,
  updated_at timestamp
);

