CREATE TABLE IF NOT EXISTS booking_discounts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id uuid NOT NULL REFERENCES bookings (id),
  coupon_id uuid REFERENCES coupons (id),
  promotion_id uuid REFERENCES promotions (id),
  discount_type varchar,
  discount_value decimal(10,2),
  applied_amount decimal(10,2),
  created_at timestamp,
  updated_at timestamp
);

