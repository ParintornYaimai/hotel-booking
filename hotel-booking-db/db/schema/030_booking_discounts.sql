CREATE TABLE IF NOT EXISTS booking_discounts (
  id integer PRIMARY KEY,
  booking_id integer NOT NULL REFERENCES bookings (id),
  coupon_id integer REFERENCES coupons (id),
  promotion_id integer REFERENCES promotions (id),
  discount_type varchar,
  discount_value decimal(10,2),
  applied_amount decimal(10,2),
  created_at timestamp,
  updated_at timestamp
);

