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

  const response = await app.inject({
    method: 'POST',
    url: '/bookings',
    payload: {
      userId: 'user_1',
      hotelId: 'hotel_2',
      checkInDate: '2026-07-10',
      checkOutDate: '2026-07-12'
    }
  });

  assert.equal(response.statusCode, 201);
  const booking = response.json();
  assert.equal(booking.userId, 'user_1');
  assert.equal(booking.hotelId, 'hotel_2');
});
