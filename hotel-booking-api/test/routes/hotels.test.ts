import assert from 'node:assert/strict';
import { test } from 'node:test';

import { build } from '../helper';

test('hotels list returns seeded hotels', async (t) => {
  const app = await build();
  t.after(() => app.close());

  const response = await app.inject({
    method: 'GET',
    url: '/hotels'
  });

  assert.equal(response.statusCode, 200);
  const hotels = response.json();
  assert.equal(Array.isArray(hotels), true);
  assert.equal(hotels.length >= 2, true);
});

test('hotels by id returns one hotel', async (t) => {
  const app = await build();
  t.after(() => app.close());

  const response = await app.inject({
    method: 'GET',
    url: '/hotels/hotel_1'
  });

  assert.equal(response.statusCode, 200);
  const hotel = response.json();
  assert.equal(hotel.id, 'hotel_1');
});

test('hotels by id returns not found error payload', async (t) => {
  const app = await build();
  t.after(() => app.close());

  const response = await app.inject({
    method: 'GET',
    url: '/hotels/hotel_missing'
  });

  assert.equal(response.statusCode, 404);
  const body = response.json();
  assert.equal(body.message, 'Hotel not found');
  assert.equal(body.code, 'HOTEL_NOT_FOUND');
});
