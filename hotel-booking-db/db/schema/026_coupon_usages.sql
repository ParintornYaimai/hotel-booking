CREATE TABLE IF NOT EXISTS coupon_usages (
  id integer PRIMARY KEY,
  coupon_id integer NOT NULL REFERENCES coupons (id),
  user_id integer REFERENCES users (id),
  booking_id integer REFERENCES bookings (id),
  used_at timestamp,
  created_at timestamp,
  updated_at timestamp
);

