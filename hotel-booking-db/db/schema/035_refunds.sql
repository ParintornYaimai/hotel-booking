CREATE TABLE IF NOT EXISTS refunds (
  id integer PRIMARY KEY,
  payment_id integer NOT NULL REFERENCES payments (id),
  booking_id integer REFERENCES bookings (id),
  amount decimal(10,2) NOT NULL,
  reason varchar,
  status varchar DEFAULT 'pending',
  refund_ref varchar,
  processed_by integer REFERENCES users (id),
  processed_at timestamp,
  created_at timestamp,
  updated_at timestamp
);

