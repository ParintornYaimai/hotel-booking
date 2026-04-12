CREATE TABLE IF NOT EXISTS payments (
  id integer PRIMARY KEY,
  booking_id integer NOT NULL REFERENCES bookings (id),
  payment_method varchar NOT NULL,
  amount decimal(10,2) NOT NULL,
  payment_status varchar NOT NULL DEFAULT 'pending',
  transaction_ref varchar,
  paid_at timestamp,
  created_at timestamp,
  updated_at timestamp
);
