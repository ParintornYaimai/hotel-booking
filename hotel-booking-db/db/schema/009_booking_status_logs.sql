CREATE TABLE IF NOT EXISTS booking_status_logs (
  id integer PRIMARY KEY,
  booking_id integer NOT NULL REFERENCES bookings (id),
  old_status varchar,
  new_status varchar NOT NULL,
  changed_by integer REFERENCES users (id),
  changed_at timestamp,
  note varchar
);
