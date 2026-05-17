import assert from 'node:assert/strict';
import { test } from 'node:test';

import { build } from '../helper';

test('users list returns seeded users', async (t) => {
  const app = await build();
  t.after(() => app.close());

  const response = await app.inject({
    method: 'GET',
    url: '/users'
  });

  assert.equal(response.statusCode, 200);
  const users = response.json();
  assert.equal(Array.isArray(users), true);
  assert.equal(users.length >= 2, true);
});

test('users by id returns one user', async (t) => {
  const app = await build();
  t.after(() => app.close());

  const response = await app.inject({
    method: 'GET',
    url: '/users/user_1'
  });

  assert.equal(response.statusCode, 200);
  const user = response.json();
  assert.equal(user.id, 'user_1');
});

test('users by id returns not found error payload', async (t) => {
  const app = await build();
  t.after(() => app.close());

  const response = await app.inject({
    method: 'GET',
    url: '/users/user_missing'
  });

  assert.equal(response.statusCode, 404);
  const body = response.json();
  assert.equal(body.message, 'User not found');
  assert.equal(body.code, 'USER_NOT_FOUND');
});
