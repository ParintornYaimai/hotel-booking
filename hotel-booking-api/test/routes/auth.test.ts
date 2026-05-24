import assert from 'node:assert/strict';
import { test } from 'node:test';

import { build } from '../helper';

test('auth login with valid credentials', async (t) => {
  const app = await build();
  t.after(() => app.close());

  const response = await app.inject({
    method: 'POST',
    url: '/auth/login',
    payload: {
      email: 'demo@hotel-booking.local',
      password: 'password123'
    }
  });

  assert.equal(response.statusCode, 200);
  const body = response.json();
  assert.equal(body.user.email, 'demo@hotel-booking.local');
  assert.equal(typeof body.user.id, 'string');
  assert.equal(body.user.id.length > 0, true);
  assert.equal(body.tokens.tokenType, 'Bearer');
});

test('auth login with invalid credentials', async (t) => {
  const app = await build();
  t.after(() => app.close());

  const response = await app.inject({
    method: 'POST',
    url: '/auth/login',
    payload: {
      email: 'demo@hotel-booking.local',
      password: 'wrong-password'
    }
  });

  assert.equal(response.statusCode, 401);
  const body = response.json();
  assert.equal(body.message, 'Invalid email or password');
  assert.equal(body.code, 'INVALID_CREDENTIALS');
});

test('auth login validates payload shape', async (t) => {
  const app = await build();
  t.after(() => app.close());

  const response = await app.inject({
    method: 'POST',
    url: '/auth/login',
    payload: {
      email: 'invalid-email',
      password: '123'
    }
  });

  assert.equal(response.statusCode, 400);
  const body = response.json();
  assert.equal(body.message, 'Invalid login payload');
  assert.equal(Array.isArray(body.errors), true);
});
