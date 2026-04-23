CREATE TABLE IF NOT EXISTS refunds (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  payment_id uuid NOT NULL REFERENCES payments (id),
  booking_id uuid REFERENCES bookings (id),
  amount decimal(10,2) NOT NULL,
  reason varchar,
  status varchar DEFAULT 'pending',
  refund_ref varchar,
  processed_by uuid REFERENCES users (id),
  processed_at timestamp,
  created_at timestamp,
  updated_at timestamp
);

