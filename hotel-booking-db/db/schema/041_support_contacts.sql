CREATE TABLE IF NOT EXISTS support_contacts (
  id integer PRIMARY KEY,
  email varchar,
  phone varchar,
  line_id varchar,
  whatsapp varchar,
  created_at timestamp,
  updated_at timestamp
);

