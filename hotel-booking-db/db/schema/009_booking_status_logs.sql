CREATE TABLE IF NOT EXISTS booking_status_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id uuid NOT NULL REFERENCES bookings (id),
  old_status varchar,
  new_status varchar NOT NULL,
  changed_by uuid REFERENCES users (id),
  changed_at timestamp,
  note varchar
);
