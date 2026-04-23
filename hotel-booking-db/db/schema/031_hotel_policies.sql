CREATE TABLE IF NOT EXISTS hotel_policies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  hotel_id uuid NOT NULL REFERENCES hotels (id),
  check_in_policy text,
  check_out_policy text,
  cancellation_policy text,
  smoking_policy text,
  pet_policy text,
  children_policy text,
  extra_bed_policy text,
  created_at timestamp,
  updated_at timestamp
);

