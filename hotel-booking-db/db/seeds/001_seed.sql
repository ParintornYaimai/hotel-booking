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

-- Ensure every table has at least 4 seed rows

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
    4,
    'ops.demo@example.com',
    'ops_demo',
    'Ops',
    'Demo',
    '$2b$12$replace-with-real-hash-4',
    '+66000000004',
    'admin',
    'active',
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  )
ON CONFLICT (id) DO NOTHING;

INSERT INTO roles (id, name, description, created_at, updated_at)
VALUES
  (1, 'admin', 'Administrator role', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 'editor', 'Content editor role', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 'finance', 'Finance operator role', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 'support', 'Support agent role', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO admin_user_roles (id, user_id, role_id, created_at, updated_at)
VALUES
  (1, 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 2, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 3, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 4, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO admin_invitations (
  id,
  email,
  role_id,
  token,
  status,
  expires_at,
  invited_by,
  accepted_at,
  created_at,
  updated_at
)
VALUES
  (1, 'invite.admin1@example.com', 1, 'adm-token-0001', 'pending', CURRENT_TIMESTAMP + INTERVAL '7 days', 3, NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 'invite.admin2@example.com', 2, 'adm-token-0002', 'accepted', CURRENT_TIMESTAMP + INTERVAL '7 days', 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 'invite.admin3@example.com', 3, 'adm-token-0003', 'revoked', CURRENT_TIMESTAMP + INTERVAL '7 days', 4, NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 'invite.admin4@example.com', 4, 'adm-token-0004', 'expired', CURRENT_TIMESTAMP - INTERVAL '1 day', 4, NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO user_sessions (
  id,
  user_id,
  session_token,
  ip_address,
  user_agent,
  last_active_at,
  expires_at,
  created_at,
  updated_at
)
VALUES
  (1, 1, 'sess-0001', '127.0.0.1', 'SeedAgent/1.0', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP + INTERVAL '1 day', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 2, 'sess-0002', '127.0.0.2', 'SeedAgent/1.0', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP + INTERVAL '1 day', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 3, 'sess-0003', '127.0.0.3', 'SeedAgent/1.0', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP + INTERVAL '1 day', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 4, 'sess-0004', '127.0.0.4', 'SeedAgent/1.0', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP + INTERVAL '1 day', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO destinations (
  id,
  name,
  slug,
  type,
  description,
  country,
  province,
  cover_image_url,
  is_popular,
  created_at,
  updated_at
)
VALUES
  (1, 'Bangkok', 'bangkok', 'hotel', 'Capital city destination', 'Thailand', 'Bangkok', 'https://example.com/images/destination-bangkok.jpg', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 'Chiang Mai', 'chiang-mai', 'hotel', 'Northern mountain destination', 'Thailand', 'Chiang Mai', 'https://example.com/images/destination-chiangmai.jpg', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 'Phuket', 'phuket', 'hotel', 'Island and beach destination', 'Thailand', 'Phuket', 'https://example.com/images/destination-phuket.jpg', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 'Pattaya', 'pattaya', 'hotel', 'Coastal city destination', 'Thailand', 'Chonburi', 'https://example.com/images/destination-pattaya.jpg', false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO categories (id, name, slug, description, icon, created_at, updated_at)
VALUES
  (1, 'City', 'city', 'City stay hotels', 'city', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 'Beach', 'beach', 'Beachfront hotels', 'beach', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 'Mountain', 'mountain', 'Mountain retreat hotels', 'mountain', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 'Family', 'family', 'Family friendly hotels', 'family', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO coupons (
  id,
  code,
  name,
  description,
  discount_type,
  discount_value,
  min_spend,
  max_discount,
  usage_limit,
  usage_per_user,
  starts_at,
  ends_at,
  status,
  created_at,
  updated_at
)
VALUES
  (1, 'WELCOME10', 'Welcome 10%', 'First booking discount', 'percent', 10.00, 1000.00, 1000.00, 1000, 1, CURRENT_TIMESTAMP - INTERVAL '1 day', CURRENT_TIMESTAMP + INTERVAL '30 days', 'active', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 'FAMILY500', 'Family 500', 'Fixed amount family discount', 'fixed_amount', 500.00, 4000.00, 500.00, 500, 1, CURRENT_TIMESTAMP - INTERVAL '1 day', CURRENT_TIMESTAMP + INTERVAL '30 days', 'active', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 'BUSINESS7', 'Business 7%', 'Business traveler discount', 'percent', 7.00, 2000.00, 800.00, 800, 2, CURRENT_TIMESTAMP - INTERVAL '1 day', CURRENT_TIMESTAMP + INTERVAL '30 days', 'active', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 'SUMMER300', 'Summer 300', 'Seasonal fixed discount', 'fixed_amount', 300.00, 2500.00, 300.00, 900, 2, CURRENT_TIMESTAMP - INTERVAL '1 day', CURRENT_TIMESTAMP + INTERVAL '30 days', 'active', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO coupon_usages (id, coupon_id, user_id, booking_id, used_at, created_at, updated_at)
VALUES
  (1, 1, 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 2, 1, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 3, 2, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 4, 3, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO taxes (id, name, type, value, is_active, created_at, updated_at)
VALUES
  (1, 'VAT 7%', 'percent', 7.00, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 'Service Tax', 'percent', 1.00, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 'Tourism Tax', 'fixed_amount', 50.00, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 'Municipal Tax', 'percent', 2.00, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO service_fees (id, name, type, value, is_active, created_at, updated_at)
VALUES
  (1, 'Platform Fee', 'percent', 3.00, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 'Handling Fee', 'fixed_amount', 99.00, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 'Weekend Fee', 'fixed_amount', 150.00, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 'High Season Fee', 'percent', 5.00, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO booking_rooms (
  id,
  booking_id,
  room_type_id,
  room_name_snapshot,
  quantity,
  price_per_night,
  nights,
  subtotal_amount,
  created_at,
  updated_at
)
VALUES
  (1, 1, 1, 'Deluxe', 1, 2500.00, 2, 5000.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 2, 2, 'Family Suite', 1, 4200.00, 3, 12600.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 3, 4, 'Executive King', 1, 3300.00, 2, 6600.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 4, 5, 'Garden Villa', 1, 3600.00, 5, 18000.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO booking_discounts (
  id,
  booking_id,
  coupon_id,
  promotion_id,
  discount_type,
  discount_value,
  applied_amount,
  created_at,
  updated_at
)
VALUES
  (1, 1, 1, 1, 'percent', 10.00, 500.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 2, 2, 2, 'percent', 12.00, 1512.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 3, 3, 3, 'fixed_amount', 300.00, 300.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 4, 4, 4, 'percent', 15.00, 2700.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO hotel_policies (
  id,
  hotel_id,
  check_in_policy,
  check_out_policy,
  cancellation_policy,
  smoking_policy,
  pet_policy,
  children_policy,
  extra_bed_policy,
  created_at,
  updated_at
)
VALUES
  (1, 1, 'Check-in after 14:00', 'Check-out before 12:00', 'Free cancellation 48 hours', 'Non-smoking rooms only', 'Pets not allowed', 'Children welcome', 'Extra bed available on request', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 2, 'Check-in after 14:00', 'Check-out before 12:00', 'Free cancellation 24 hours', 'Designated smoking area', 'Pets not allowed', 'Children welcome', 'Extra bed with charge', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 3, 'Check-in after 15:00', 'Check-out before 11:00', 'Free cancellation 72 hours', 'Non-smoking property', 'Small pets allowed', 'Children welcome', 'Extra bed limited', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 4, 'Check-in after 14:00', 'Check-out before 12:00', 'Free cancellation 48 hours', 'Designated smoking area', 'Pets allowed', 'Children welcome', 'Extra bed available', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO wishlists (id, user_id, hotel_id, created_at, updated_at)
VALUES
  (1, 1, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 2, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 3, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 4, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO payment_methods (id, code, name, is_active, created_at, updated_at)
VALUES
  (1, 'card', 'Credit/Debit Card', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 'promptpay', 'PromptPay QR', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 'bank_transfer', 'Bank Transfer', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 'cash', 'Cash at Hotel', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO payment_gateways (id, name, code, is_active, created_at, updated_at)
VALUES
  (1, 'Omise', 'omise', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 'Stripe', 'stripe', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, '2C2P', '2c2p', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 'SCB Easy', 'scb_easy', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO refunds (
  id,
  payment_id,
  booking_id,
  amount,
  reason,
  status,
  refund_ref,
  processed_by,
  processed_at,
  created_at,
  updated_at
)
VALUES
  (1, 1, 1, 100.00, 'Price adjustment', 'success', 'RF-0001', 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 2, 2, 200.00, 'Partial goodwill refund', 'success', 'RF-0002', 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 3, 3, 150.00, 'Pending manual review', 'pending', 'RF-0003', 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 5, 5, 500.00, 'Cancelled booking refund', 'success', 'RF-0004', 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO billing_profiles (
  id,
  user_id,
  booking_id,
  company_name,
  tax_number,
  address,
  province,
  country,
  postal_code,
  created_at,
  updated_at
)
VALUES
  (1, 1, 1, 'Demo Co., Ltd.', '0105559000001', '101 Demo Road', 'Bangkok', 'Thailand', '10110', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 2, 3, 'City Biz Co., Ltd.', '0105559000002', '202 Business Road', 'Bangkok', 'Thailand', '10260', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 3, 5, 'Mountain Trade Co., Ltd.', '0505559000003', '303 Hillside Road', 'Chiang Mai', 'Thailand', '50000', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 4, 6, 'Beach Ventures Co., Ltd.', '8305559000004', '404 Coast Road', 'Phuket', 'Thailand', '83000', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO invoices (
  id,
  booking_id,
  payment_id,
  billing_profile_id,
  invoice_number,
  type,
  file_url,
  issued_at,
  created_at,
  updated_at
)
VALUES
  (1, 1, 1, 1, 'INV-2026-0001', 'receipt', 'https://example.com/invoices/INV-2026-0001.pdf', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 2, 2, 2, 'INV-2026-0002', 'tax_invoice', 'https://example.com/invoices/INV-2026-0002.pdf', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 3, 3, 3, 'INV-2026-0003', 'invoice', 'https://example.com/invoices/INV-2026-0003.pdf', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 4, 4, 4, 'INV-2026-0004', 'receipt', 'https://example.com/invoices/INV-2026-0004.pdf', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO newsletter_subscribers (
  id,
  email,
  status,
  subscribed_at,
  unsubscribed_at,
  created_at,
  updated_at
)
VALUES
  (1, 'news1@example.com', 'subscribed', CURRENT_TIMESTAMP, NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 'news2@example.com', 'subscribed', CURRENT_TIMESTAMP, NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 'news3@example.com', 'unsubscribed', CURRENT_TIMESTAMP - INTERVAL '10 days', CURRENT_TIMESTAMP - INTERVAL '2 days', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 'news4@example.com', 'subscribed', CURRENT_TIMESTAMP, NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO features (id, title, description, icon, sort_order, created_at, updated_at)
VALUES
  (1, 'Best Price Guarantee', 'We offer competitive prices every day.', 'tag', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 'Free Cancellation', 'Many properties support free cancellation.', 'calendar', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, '24/7 Support', 'Support team available all day.', 'headset', 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 'Secure Payment', 'Encrypted and secure checkout process.', 'shield', 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO pages (id, slug, title, content, status, created_at, updated_at)
VALUES
  (1, 'about', 'About Us', 'About us page content.', 'published', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 'privacy', 'Privacy Policy', 'Privacy policy content.', 'published', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 'terms', 'Terms and Conditions', 'Terms and conditions content.', 'published', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 'contact', 'Contact Us', 'Contact information page.', 'published', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO support_contacts (id, email, phone, line_id, whatsapp, created_at, updated_at)
VALUES
  (1, 'support@demo.com', '+66020000001', 'support-demo-1', '+66020000001', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 'sales@demo.com', '+66020000002', 'support-demo-2', '+66020000002', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 'billing@demo.com', '+66020000003', 'support-demo-3', '+66020000003', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 'ops@demo.com', '+66020000004', 'support-demo-4', '+66020000004', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO uploads (
  id,
  file_name,
  file_url,
  file_type,
  mime_type,
  file_size,
  uploaded_by,
  created_at,
  updated_at
)
VALUES
  (1, 'hotel-cover-1.jpg', 'https://example.com/uploads/hotel-cover-1.jpg', 'image', 'image/jpeg', 120000, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 'hotel-cover-2.jpg', 'https://example.com/uploads/hotel-cover-2.jpg', 'image', 'image/jpeg', 130000, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 'invoice-template.pdf', 'https://example.com/uploads/invoice-template.pdf', 'document', 'application/pdf', 98000, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 'promotion-banner.png', 'https://example.com/uploads/promotion-banner.png', 'image', 'image/png', 145000, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO attraction_images (
  id,
  attraction_id,
  image_url,
  thumbnail_url,
  is_cover,
  sort_order,
  created_at,
  updated_at
)
VALUES
  (1, 1, 'https://example.com/images/attraction-1.jpg', 'https://example.com/images/attraction-1-thumb.jpg', true, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 2, 'https://example.com/images/attraction-2.jpg', 'https://example.com/images/attraction-2-thumb.jpg', true, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 3, 'https://example.com/images/attraction-3.jpg', 'https://example.com/images/attraction-3-thumb.jpg', true, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 4, 'https://example.com/images/attraction-4.jpg', 'https://example.com/images/attraction-4-thumb.jpg', true, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO flash_deals (
  id,
  hotel_id,
  title,
  description,
  discount_percent,
  start_at,
  end_at,
  is_active,
  created_at,
  updated_at
)
VALUES
  (1, 1, 'Midnight Deal', 'Late-night booking special', 15.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP + INTERVAL '5 days', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 2, 'Business Quick Save', 'Business short-stay discount', 10.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP + INTERVAL '7 days', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 3, 'Mountain Escape', 'Special mountain package', 12.50, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP + INTERVAL '10 days', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 4, 'Beach Blast', 'Limited beach resort discount', 18.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP + INTERVAL '3 days', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO banners (
  id,
  page_key,
  title,
  subtitle,
  image_url,
  cta_label,
  cta_link,
  is_active,
  sort_order,
  created_at,
  updated_at
)
VALUES
  (1, 'home', 'Plan Your Next Stay', 'Find hotels with the best deals', 'https://example.com/banners/home-1.jpg', 'Book Now', '/hotels', true, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 'home', 'Weekend Getaway', 'Escape to beach and mountain stays', 'https://example.com/banners/home-2.jpg', 'Explore', '/destinations', true, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 'offers', 'Flash Deals', 'Limited-time hotel promotions', 'https://example.com/banners/offers-1.jpg', 'View Deals', '/offers', true, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 'about', 'About Our Platform', 'Trusted booking partner', 'https://example.com/banners/about-1.jpg', 'Learn More', '/about', true, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO audit_logs (
  id,
  user_id,
  entity_type,
  entity_id,
  action,
  before_data,
  after_data,
  created_at
)
VALUES
  (1, 3, 'hotel', 1, 'update', '{"status":"draft"}', '{"status":"published"}', CURRENT_TIMESTAMP),
  (2, 2, 'promotion', 2, 'create', NULL, '{"name":"Family Weekend"}', CURRENT_TIMESTAMP),
  (3, 4, 'coupon', 1, 'update', '{"status":"inactive"}', '{"status":"active"}', CURRENT_TIMESTAMP),
  (4, 1, 'booking', 3, 'update', '{"status":"pending"}', '{"status":"confirmed"}', CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO revenue_targets (id, month, target_amount, created_at, updated_at)
VALUES
  (1, '2026-01', 500000.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, '2026-02', 520000.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, '2026-03', 540000.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, '2026-04', 560000.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO system_settings (id, setting_key, setting_value, created_at, updated_at)
VALUES
  (1, 'default_currency', 'THB', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 'default_timezone', 'Asia/Bangkok', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 'maintenance_mode', 'false', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 'booking_confirmation_timeout_minutes', '30', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO system_notification_settings (
  id,
  email_enabled,
  push_enabled,
  sms_enabled,
  created_at,
  updated_at
)
VALUES
  (1, true, false, false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, true, true, false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, true, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, false, true, false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO merchant_accounts (
  id,
  payment_gateway_id,
  merchant_name,
  merchant_id,
  status,
  created_at,
  updated_at
)
VALUES
  (1, 1, 'Demo Merchant Omise', 'OMS-M-001', 'active', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 2, 'Demo Merchant Stripe', 'STP-M-002', 'active', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 3, 'Demo Merchant 2C2P', 'TCP-M-003', 'inactive', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 4, 'Demo Merchant SCB', 'SCB-M-004', 'active', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO booking_rules (
  id,
  allow_pay_later,
  auto_cancel_pending_minutes,
  refund_policy_note,
  created_at,
  updated_at
)
VALUES
  (1, false, 30, 'Default strict booking rule', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, true, 45, 'Allow pay-later for selected hotels', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, false, 20, 'Fast auto-cancel for flash deals', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, true, 60, 'Relaxed rule for corporate clients', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO gateway_test_logs (
  id,
  payment_gateway_id,
  tested_by,
  status,
  response_message,
  tested_at,
  created_at
)
VALUES
  (1, 1, 3, 'success', 'Gateway connectivity OK', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 2, 3, 'success', 'Payment intent created', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 3, 4, 'failed', 'Timeout from upstream provider', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 4, 4, 'success', 'Webhook signature valid', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO currencies (id, code, name, symbol, created_at, updated_at)
VALUES
  (1, 'THB', 'Thai Baht', 'THB', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 'USD', 'US Dollar', '$', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 'EUR', 'Euro', 'EUR', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 'JPY', 'Japanese Yen', 'JPY', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO timezones (id, name, utc_offset, created_at, updated_at)
VALUES
  (1, 'Asia/Bangkok', '+07:00', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 'Asia/Tokyo', '+09:00', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 'Europe/London', '+00:00', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 'America/New_York', '-05:00', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

 