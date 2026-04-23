CREATE TABLE IF NOT EXISTS coupon_usages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  coupon_id uuid NOT NULL REFERENCES coupons (id),
  user_id uuid REFERENCES users (id),
  booking_id uuid REFERENCES bookings (id),
  used_at timestamp,
  created_at timestamp,
  updated_at timestamp
);

