INSERT INTO users (
  id,
  email,
  username,
  first_name,
  last_name,
  password_hash,
  phone_number,
  role,
  status,
  created_at,
  updated_at
)
VALUES
  (
    1,
    'customer.demo@example.com',
    'customer_demo',
    'Customer',
    'Demo',
    '$2b$12$replace-with-real-hash-1',
    '+66000000001',
    'customer',
    'active',
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  ),
  (
    2,
    'backoffice.demo@example.com',
    'backoffice_demo',
    'Backoffice',
    'Demo',
    '$2b$12$replace-with-real-hash-2',
    '+66000000002',
    'backoffice',
    'active',
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  ),
  (
    3,
    'admin.demo@example.com',
    'admin_demo',
    'Admin',
    'Demo',
    '$2b$12$replace-with-real-hash-3',
    '+66000000003',
    'admin',
    'active',
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  )
ON CONFLICT (id) DO NOTHING;

INSERT INTO hotels (
  id,
  name,
  description,
  address,
  province,
  latitude,
  longitude,
  rating,
  created_at,
  updated_at
) VALUES (
  1,
  'Demo Riverside Hotel',
  'Sample hotel record for local development.',
  '123 Demo Street',
  'Bangkok',
  13.7563000,
  100.5018000,
  4.5,
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
)
ON CONFLICT (id) DO NOTHING;

INSERT INTO facilities (id, name, name_th, icon, created_at, updated_at)
VALUES
  (1, 'Wifi', 'Wifi', 'wifi', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 'Parking', 'Parking', 'parking', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT (id) DO NOTHING;

INSERT INTO attractions (
  id,
  name,
  description,
  address,
  latitude,
  longitude,
  created_at,
  updated_at
) VALUES (
  1,
  'Demo Night Market',
  'Sample nearby attraction.',
  'Market Road',
  13.7583000,
  100.5038000,
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
)
ON CONFLICT (id) DO NOTHING;

INSERT INTO room_types (
  id,
  hotel_id,
  name,
  description,
  capacity_adults,
  capacity_children,
  bed_type,
  size_sq_m,
  total_rooms,
  created_at,
  updated_at
) VALUES (
  1,
  1,
  'Deluxe',
  'Sample deluxe room.',
  2,
  1,
  'King',
  32,
  10,
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
)
ON CONFLICT (id) DO NOTHING;

INSERT INTO room_prices (
  id,
  room_type_id,
  price,
  start_date,
  end_date,
  created_at,
  updated_at
) VALUES (
  1,
  1,
  2500.00,
  DATE '2026-01-01',
  DATE '2026-12-31',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
)
ON CONFLICT (id) DO NOTHING;

INSERT INTO promotions (
  id,
  hotel_id,
  room_type_id,
  name,
  description,
  discount_type,
  discount_value,
  start_date,
  end_date,
  is_active,
  created_at,
  updated_at
) VALUES (
  1,
  1,
  1,
  'Early Bird',
  'Discount for early booking.',
  'percent',
  10.00,
  DATE '2026-01-01',
  DATE '2026-12-31',
  true,
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
)
ON CONFLICT (id) DO NOTHING;

INSERT INTO bookings (
  id,
  user_id,
  hotel_id,
  room_type_id,
  promotion_id,
  check_in,
  check_out,
  adult_count,
  child_count,
  has_pet,
  has_car,
  room_count,
  total_price,
  final_price,
  status,
  created_at,
  updated_at
) VALUES (
  1,
  1,
  1,
  1,
  1,
  DATE '2026-06-10',
  DATE '2026-06-12',
  2,
  0,
  false,
  true,
  1,
  5000.00,
  4500.00,
  'confirmed',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
)
ON CONFLICT (id) DO NOTHING;

INSERT INTO booking_status_logs (
  id,
  booking_id,
  old_status,
  new_status,
  changed_by,
  changed_at,
  note
) VALUES (
  1,
  1,
  'pending',
  'confirmed',
  2,
  CURRENT_TIMESTAMP,
  'Seed confirmation'
)
ON CONFLICT (id) DO NOTHING;

INSERT INTO payments (
  id,
  booking_id,
  payment_method,
  amount,
  payment_status,
  transaction_ref,
  paid_at,
  created_at,
  updated_at
) VALUES (
  1,
  1,
  'card',
  4500.00,
  'paid',
  'TX-DEMO-0001',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
)
ON CONFLICT (id) DO NOTHING;

INSERT INTO hotel_images (
  id,
  hotel_id,
  image_url,
  is_cover,
  sort_order,
  created_at,
  updated_at
) VALUES (
  1,
  1,
  'https://example.com/images/hotel-1-cover.jpg',
  true,
  0,
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
)
ON CONFLICT (id) DO NOTHING;

INSERT INTO room_type_images (
  id,
  room_type_id,
  image_url,
  is_cover,
  sort_order,
  created_at,
  updated_at
) VALUES (
  1,
  1,
  'https://example.com/images/room-type-1-cover.jpg',
  true,
  0,
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
)
ON CONFLICT (id) DO NOTHING;

INSERT INTO reviews (
  id,
  user_id,
  hotel_id,
  booking_id,
  rating,
  comment,
  created_at,
  updated_at
)
VALUES (
  1,
  1,
  1,
  1,
  5,
  'Great stay for local testing.',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
)
ON CONFLICT (id) DO NOTHING;

INSERT INTO favorite_hotels (id, user_id, hotel_id, created_at, updated_at)
VALUES (1, 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT (id) DO NOTHING;

INSERT INTO hotel_facilities (id, hotel_id, facility_id, created_at, updated_at)
VALUES
  (1, 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 1, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT (id) DO NOTHING;

INSERT INTO room_type_facilities (id, room_type_id, facility_id, created_at, updated_at)
VALUES (1, 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT (id) DO NOTHING;

INSERT INTO booking_guests (
  id,
  booking_id,
  first_name,
  last_name,
  guest_type,
  created_at,
  updated_at
) VALUES (
  1,
  1,
  'Demo',
  'Guest',
  'adult',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
)
ON CONFLICT (id) DO NOTHING;

INSERT INTO hotel_attractions (id, hotel_id, attraction_id, distance_km, created_at, updated_at)
VALUES (1, 1, 1, 1.20, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT (id) DO NOTHING;
