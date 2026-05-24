import assert from 'node:assert/strict';
import { test } from 'node:test';

import { build } from '../helper';

test('bookings list returns seeded bookings', async (t) => {
  const app = await build();
  t.after(() => app.close());

  const response = await app.inject({
    method: 'GET',
    url: '/bookings'
  });

  assert.equal(response.statusCode, 200);
  const bookings = response.json();
  assert.equal(Array.isArray(bookings), true);
  assert.equal(bookings.length >= 1, true);
});

test('create booking returns 201', async (t) => {
  const app = await build();
  t.after(() => app.close());

  const usersResponse = await app.inject({
    method: 'GET',
    url: '/users'
  });
  assert.equal(usersResponse.statusCode, 200);
  const users = usersResponse.json();
  const userId = users[0]?.id;
  assert.equal(typeof userId, 'string');

  const hotelsResponse = await app.inject({
    method: 'GET',
    url: '/hotels'
  });
  assert.equal(hotelsResponse.statusCode, 200);
  const hotels = hotelsResponse.json();
  const hotelId = hotels[0]?.id;
  assert.equal(typeof hotelId, 'string');

  const response = await app.inject({
    method: 'POST',
    url: '/bookings',
    payload: {
      userId,
      hotelId,
      checkInDate: '2026-07-10',
      checkOutDate: '2026-07-12'
    }
  });

  assert.equal(response.statusCode, 201);
  const booking = response.json();
  assert.equal(booking.userId, userId);
  assert.equal(booking.hotelId, hotelId);
});

test('bookings list validates query string', async (t) => {
  const app = await build();
  t.after(() => app.close());

  const response = await app.inject({
    method: 'GET',
    url: '/bookings?userId='
  });

  assert.equal(response.statusCode, 400);
  const body = response.json();
  assert.equal(body.message, 'Invalid query string');
  assert.equal(Array.isArray(body.errors), true);
});

test('create booking validates payload shape', async (t) => {
  const app = await build();
  t.after(() => app.close());

  const response = await app.inject({
    method: 'POST',
    url: '/bookings',
    payload: {
      userId: 'not-a-uuid',
      hotelId: '',
      checkInDate: 'not-a-date',
      checkOutDate: '2026-07-12'
    }
  });

  assert.equal(response.statusCode, 400);
  const body = response.json();
  assert.equal(body.message, 'Invalid booking payload');
  assert.equal(Array.isArray(body.errors), true);
});

test('create booking returns conflict for invalid date range', async (t) => {
  const app = await build();
  t.after(() => app.close());

  const usersResponse = await app.inject({
    method: 'GET',
    url: '/users'
  });
  assert.equal(usersResponse.statusCode, 200);
  const users = usersResponse.json();
  const userId = users[0]?.id;
  assert.equal(typeof userId, 'string');

  const hotelsResponse = await app.inject({
    method: 'GET',
    url: '/hotels'
  });
  assert.equal(hotelsResponse.statusCode, 200);
  const hotels = hotelsResponse.json();
  const hotelId = hotels[0]?.id;
  assert.equal(typeof hotelId, 'string');

  const response = await app.inject({
    method: 'POST',
    url: '/bookings',
    payload: {
      userId,
      hotelId,
      checkInDate: '2026-07-12',
      checkOutDate: '2026-07-10'
    }
  });

  assert.equal(response.statusCode, 409);
  const body = response.json();
  assert.equal(body.message, 'Check-out date must be after check-in date');
  assert.equal(body.code, 'BOOKING_DATE_CONFLICT');
});
