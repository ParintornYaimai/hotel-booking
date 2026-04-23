CREATE TABLE IF NOT EXISTS support_contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email varchar,
  phone varchar,
  line_id varchar,
  whatsapp varchar,
  created_at timestamp,
  updated_at timestamp
);

