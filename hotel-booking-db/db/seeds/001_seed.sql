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
)
VALUES
  (
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
  ),
  (
    2,
    'Skyline Business Hotel',
    'Modern business hotel in city center.',
    '88 Sukhumvit Road',
    'Bangkok',
    13.7305000,
    100.5652000,
    4.3,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  ),
  (
    3,
    'Mountain View Resort',
    'Quiet resort with mountain scenery.',
    '19 Highland Lane',
    'Chiang Mai',
    18.8064000,
    98.9607000,
    4.7,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  ),
  (
    4,
    'Beachfront Escape',
    'Seaside resort for family and leisure stays.',
    '55 Coastal Drive',
    'Phuket',
    7.8804000,
    98.3923000,
    4.6,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  )
ON CONFLICT (id) DO NOTHING;

INSERT INTO facilities (id, name, name_th, icon, created_at, updated_at)
VALUES
  (1, 'Wifi', 'Wifi', 'wifi', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 'Parking', 'Parking', 'parking', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 'Swimming Pool', 'Swimming Pool', 'pool', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 'Fitness Center', 'Fitness Center', 'fitness', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (5, 'Airport Shuttle', 'Airport Shuttle', 'shuttle', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 'Breakfast', 'Breakfast', 'breakfast', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (7, 'Pet Friendly', 'Pet Friendly', 'pet', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (8, 'EV Charger', 'EV Charger', 'ev', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
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
)
VALUES
  (
    1,
    'Demo Night Market',
    'Sample nearby attraction.',
    'Market Road',
    13.7583000,
    100.5038000,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  ),
  (
    2,
    'Riverside Walk',
    'Scenic walking area by the river.',
    'Riverfront Avenue',
    13.7489000,
    100.4985000,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  ),
  (
    3,
    'City Art Museum',
    'Contemporary and local art exhibits.',
    'Museum District 5',
    13.7422000,
    100.5310000,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  ),
  (
    4,
    'Mountain Trailhead',
    'Popular trail with panoramic viewpoints.',
    'Trailhead Road',
    18.8200000,
    98.9300000,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  ),
  (
    5,
    'Beach Pier',
    'Boardwalk and sunset viewpoint.',
    'Pier Street',
    7.8855000,
    98.3896000,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  ),
  (
    6,
    'Old Town Temple',
    'Historic temple in the old town area.',
    'Temple Road',
    18.7902000,
    98.9871000,
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
)
VALUES
  (
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
  ),
  (
    2,
    1,
    'Family Suite',
    'Large suite for family stays.',
    4,
    2,
    'Two Queen',
    52,
    6,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  ),
  (
    3,
    2,
    'Standard Queen',
    'Comfort room for short business trips.',
    2,
    0,
    'Queen',
    26,
    20,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  ),
  (
    4,
    2,
    'Executive King',
    'Executive floor with lounge access.',
    2,
    1,
    'King',
    36,
    12,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  ),
  (
    5,
    3,
    'Garden Villa',
    'Private villa with garden view.',
    2,
    1,
    'King',
    42,
    8,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  ),
  (
    6,
    3,
    'Family Cabin',
    'Cabin style room near nature trails.',
    4,
    2,
    'Two Queen',
    58,
    5,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  ),
  (
    7,
    4,
    'Ocean Deluxe',
    'Ocean-facing room with balcony.',
    2,
    1,
    'King',
    40,
    14,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  ),
  (
    8,
    4,
    'Ocean Suite',
    'Premium suite with direct sea view.',
    3,
    2,
    'King',
    62,
    7,
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
)
VALUES
  (1, 1, 2500.00, DATE '2026-01-01', DATE '2026-06-30', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 1, 2900.00, DATE '2026-07-01', DATE '2026-12-31', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 2, 4200.00, DATE '2026-01-01', DATE '2026-12-31', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 3, 2100.00, DATE '2026-01-01', DATE '2026-12-31', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (5, 4, 3300.00, DATE '2026-01-01', DATE '2026-12-31', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 5, 3600.00, DATE '2026-01-01', DATE '2026-12-31', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (7, 6, 4600.00, DATE '2026-01-01', DATE '2026-12-31', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (8, 7, 3900.00, DATE '2026-01-01', DATE '2026-10-31', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (9, 7, 4500.00, DATE '2026-11-01', DATE '2026-12-31', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (10, 8, 5200.00, DATE '2026-01-01', DATE '2026-12-31', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (11, 3, 2300.00, DATE '2027-01-01', DATE '2027-12-31', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (12, 4, 3500.00, DATE '2027-01-01', DATE '2027-12-31', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
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
)
VALUES
  (
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
  ),
  (
    2,
    1,
    2,
    'Family Weekend',
    'Weekend discount for family suite.',
    'percent',
    12.00,
    DATE '2026-01-01',
    DATE '2026-12-31',
    true,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  ),
  (
    3,
    2,
    4,
    'City Break',
    'Fixed amount off for city stay.',
    'amount',
    300.00,
    DATE '2026-04-01',
    DATE '2026-10-31',
    true,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  ),
  (
    4,
    3,
    5,
    'Long Stay Mountain',
    'Save more for longer mountain trips.',
    'percent',
    15.00,
    DATE '2026-01-01',
    DATE '2026-12-31',
    true,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  ),
  (
    5,
    4,
    7,
    'Beach Season',
    'Seasonal promotion for ocean deluxe.',
    'percent',
    10.00,
    DATE '2026-10-01',
    DATE '2026-12-31',
    true,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  ),
  (
    6,
    4,
    8,
    'Suite Deal',
    'Flat discount for suite bookings.',
    'amount',
    500.00,
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
)
VALUES
  (
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
  ),
  (
    2,
    1,
    1,
    2,
    2,
    DATE '2026-07-15',
    DATE '2026-07-18',
    2,
    1,
    false,
    true,
    1,
    12600.00,
    11088.00,
    'confirmed',
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  ),
  (
    3,
    2,
    2,
    4,
    3,
    DATE '2026-08-02',
    DATE '2026-08-04',
    1,
    0,
    false,
    false,
    1,
    6600.00,
    6300.00,
    'pending',
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  ),
  (
    4,
    1,
    3,
    5,
    4,
    DATE '2026-09-01',
    DATE '2026-09-06',
    2,
    1,
    false,
    true,
    1,
    18000.00,
    15300.00,
    'confirmed',
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  ),
  (
    5,
    3,
    4,
    8,
    6,
    DATE '2026-11-20',
    DATE '2026-11-23',
    2,
    0,
    false,
    false,
    1,
    15600.00,
    15100.00,
    'cancelled',
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  ),
  (
    6,
    1,
    4,
    7,
    5,
    DATE '2026-12-24',
    DATE '2026-12-27',
    2,
    1,
    false,
    true,
    1,
    13500.00,
    12150.00,
    'confirmed',
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  ),
  (
    7,
    2,
    2,
    3,
    NULL,
    DATE '2026-05-10',
    DATE '2026-05-11',
    1,
    0,
    false,
    false,
    1,
    2100.00,
    2100.00,
    'completed',
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  ),
  (
    8,
    1,
    3,
    6,
    NULL,
    DATE '2026-04-12',
    DATE '2026-04-14',
    2,
    0,
    false,
    true,
    1,
    9200.00,
    9200.00,
    'pending',
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
)
VALUES
  (1, 1, 'pending', 'confirmed', 2, CURRENT_TIMESTAMP, 'Seed confirmation'),
  (2, 2, 'pending', 'confirmed', 2, CURRENT_TIMESTAMP, 'Family weekend booking approved'),
  (3, 3, NULL, 'pending', 2, CURRENT_TIMESTAMP, 'Booking created and awaiting payment'),
  (4, 4, 'pending', 'confirmed', 2, CURRENT_TIMESTAMP, 'Long stay booking confirmed'),
  (5, 5, 'pending', 'cancelled', 3, CURRENT_TIMESTAMP, 'Customer cancelled before stay'),
  (6, 6, 'pending', 'confirmed', 2, CURRENT_TIMESTAMP, 'Holiday booking approved'),
  (7, 7, 'pending', 'confirmed', 2, CURRENT_TIMESTAMP, 'Checked payment and confirmed'),
  (8, 7, 'confirmed', 'completed', 2, CURRENT_TIMESTAMP, 'Guest completed stay'),
  (9, 8, NULL, 'pending', 1, CURRENT_TIMESTAMP, 'Booking requested by customer')
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
)
VALUES
  (1, 1, 'card', 4500.00, 'paid', 'TX-DEMO-0001', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 2, 'promptpay', 11088.00, 'paid', 'TX-DEMO-0002', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 3, 'bank_transfer', 6300.00, 'pending', 'TX-DEMO-0003', NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 4, 'bank_transfer', 15300.00, 'paid', 'TX-DEMO-0004', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (5, 5, 'card', 15100.00, 'refunded', 'TX-DEMO-0005', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 6, 'card', 12150.00, 'paid', 'TX-DEMO-0006', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (7, 7, 'qr', 2100.00, 'paid', 'TX-DEMO-0007', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (8, 8, 'card', 9200.00, 'pending', 'TX-DEMO-0008', NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT (id) DO NOTHING;

INSERT INTO hotel_images (
  id,
  hotel_id,
  image_url,
  is_cover,
  sort_order,
  created_at,
  updated_at
)
VALUES
  (1, 1, 'https://example.com/images/hotel-1-cover.jpg', true, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 1, 'https://example.com/images/hotel-1-lobby.jpg', false, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 2, 'https://example.com/images/hotel-2-cover.jpg', true, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 2, 'https://example.com/images/hotel-2-lounge.jpg', false, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (5, 3, 'https://example.com/images/hotel-3-cover.jpg', true, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 3, 'https://example.com/images/hotel-3-garden.jpg', false, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (7, 4, 'https://example.com/images/hotel-4-cover.jpg', true, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (8, 4, 'https://example.com/images/hotel-4-pool.jpg', false, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT (id) DO NOTHING;

INSERT INTO room_type_images (
  id,
  room_type_id,
  image_url,
  is_cover,
  sort_order,
  created_at,
  updated_at
)
VALUES
  (1, 1, 'https://example.com/images/room-type-1-cover.jpg', true, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 2, 'https://example.com/images/room-type-2-cover.jpg', true, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 2, 'https://example.com/images/room-type-2-living.jpg', false, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 3, 'https://example.com/images/room-type-3-cover.jpg', true, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (5, 4, 'https://example.com/images/room-type-4-cover.jpg', true, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 5, 'https://example.com/images/room-type-5-cover.jpg', true, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (7, 6, 'https://example.com/images/room-type-6-cover.jpg', true, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (8, 7, 'https://example.com/images/room-type-7-cover.jpg', true, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (9, 8, 'https://example.com/images/room-type-8-cover.jpg', true, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (10, 8, 'https://example.com/images/room-type-8-balcony.jpg', false, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
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
VALUES
  (1, 1, 1, 1, 5, 'Great stay for local testing.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 1, 1, 2, 4, 'Family suite was comfortable and clean.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 2, 2, 7, 4, 'Convenient location for business meetings.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 1, 3, 4, 5, 'Very peaceful atmosphere and helpful staff.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (5, 1, 4, 6, 5, 'Excellent sea view and nice breakfast.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT (id) DO NOTHING;

INSERT INTO favorite_hotels (id, user_id, hotel_id, created_at, updated_at)
VALUES
  (1, 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 1, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 1, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 2, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (5, 2, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 3, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO hotel_facilities (id, hotel_id, facility_id, created_at, updated_at)
VALUES
  (1, 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 1, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 1, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 1, 6, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (5, 2, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 2, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (7, 2, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (8, 2, 6, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (9, 2, 8, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (10, 3, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (11, 3, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (12, 3, 6, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (13, 3, 7, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (14, 4, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (15, 4, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (16, 4, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (17, 4, 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (18, 4, 7, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO room_type_facilities (id, room_type_id, facility_id, created_at, updated_at)
VALUES
  (1, 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 1, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 1, 6, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 2, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (5, 2, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 2, 6, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (7, 3, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (8, 4, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (9, 4, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (10, 4, 6, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (11, 5, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (12, 5, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (13, 5, 7, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (14, 6, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (15, 6, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (16, 6, 7, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (17, 7, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (18, 7, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (19, 8, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (20, 8, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (21, 8, 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO booking_guests (
  id,
  booking_id,
  first_name,
  last_name,
  guest_type,
  created_at,
  updated_at
)
VALUES
  (1, 1, 'Demo', 'Guest', 'adult', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 1, 'Taylor', 'Guest', 'adult', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 2, 'Morgan', 'Lee', 'adult', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 2, 'Alex', 'Lee', 'adult', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (5, 2, 'Jamie', 'Lee', 'child', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 3, 'Chris', 'Tan', 'adult', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (7, 4, 'Nina', 'Park', 'adult', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (8, 4, 'Owen', 'Park', 'adult', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (9, 4, 'Mia', 'Park', 'child', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (10, 5, 'Noah', 'Smith', 'adult', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (11, 5, 'Ivy', 'Smith', 'adult', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (12, 6, 'Ava', 'Brown', 'adult', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (13, 6, 'Ethan', 'Brown', 'adult', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (14, 6, 'Liam', 'Brown', 'child', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (15, 7, 'Ryan', 'Lim', 'adult', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (16, 8, 'Sara', 'Khan', 'adult', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (17, 8, 'Zoe', 'Khan', 'adult', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT (id) DO NOTHING;

INSERT INTO hotel_attractions (id, hotel_id, attraction_id, distance_km, created_at, updated_at)
VALUES
  (1, 1, 1, 1.20, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 1, 2, 0.80, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 1, 3, 2.50, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 2, 2, 1.40, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (5, 2, 3, 1.10, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 2, 6, 3.60, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (7, 3, 4, 2.20, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (8, 3, 6, 4.10, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (9, 4, 5, 0.60, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (10, 4, 2, 2.90, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;
