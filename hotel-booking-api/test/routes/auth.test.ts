import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { test } from 'node:test';

import { build } from '../helper';

test('auth login with valid credentials', async (t) => {
  const app = await build();
  t.after(() => app.close());
  const email = `login-${randomUUID()}@hotel-booking.local`;
  const password = 'Password123!';

  const registerResponse = await app.inject({
    method: 'POST',
    url: '/auth/register',
    payload: {
      firstName: 'Login',
      lastName: 'User',
      email,
      password
    }
  });

  assert.equal(registerResponse.statusCode, 201);
  assert.equal(registerResponse.json().message, 'User registered successfully');

  const response = await app.inject({
    method: 'POST',
    url: '/auth/login',
    payload: {
      email,
      password
    }
  });

  assert.equal(response.statusCode, 200);
  const body = response.json();
  assert.equal(body.user.email, email);
  assert.equal(typeof body.user.id, 'string');
  assert.equal(body.user.id.length > 0, true);
  assert.equal(typeof body.accessToken, 'string');
  assert.equal(body.accessToken.length > 0, true);
  assert.equal(body.user.password_hash, undefined);
});

test('auth login with invalid credentials', async (t) => {
  const app = await build();
  t.after(() => app.close());
  const email = `invalid-login-${randomUUID()}@hotel-booking.local`;

  const registerResponse = await app.inject({
    method: 'POST',
    url: '/auth/register',
    payload: {
      firstName: 'Invalid',
      lastName: 'Login',
      email,
      password: 'Password123!'
    }
  });

  assert.equal(registerResponse.statusCode, 201);
  assert.equal(registerResponse.json().message, 'User registered successfully');

  const response = await app.inject({
    method: 'POST',
    url: '/auth/login',
    payload: {
      email,
      password: 'wrong-password'
    }
  });

  assert.equal(response.statusCode, 401);
  const body = response.json();
  assert.equal(body.message, 'Invalid email or password');
  assert.equal(body.code, 'INVALID_CREDENTIALS');
});

test('auth register creates a new user', async (t) => {
  const app = await build();
  t.after(() => app.close());

  const email = `register-${randomUUID()}@hotel-booking.local`;
  const response = await app.inject({
    method: 'POST',
    url: '/auth/register',
    payload: {
      firstName: 'Register',
      lastName: 'User',
      email,
      password: 'Password123!'
    }
  });

  assert.equal(response.statusCode, 201);
  const body = response.json();
  assert.equal(body.message, 'User registered successfully');
});

test('auth register rejects duplicate email', async (t) => {
  const app = await build();
  t.after(() => app.close());
  const email = `duplicate-${randomUUID()}@hotel-booking.local`;

  const firstResponse = await app.inject({
    method: 'POST',
    url: '/auth/register',
    payload: {
      firstName: 'Demo',
      lastName: 'User',
      email,
      password: 'Password123!'
    }
  });

  assert.equal(firstResponse.statusCode, 201);
  assert.equal(firstResponse.json().message, 'User registered successfully');

  const response = await app.inject({
    method: 'POST',
    url: '/auth/register',
    payload: {
      firstName: 'Demo',
      lastName: 'User',
      email,
      password: 'Password123!'
    }
  });

  assert.equal(response.statusCode, 409);
  const body = response.json();
  assert.equal(body.message, 'Email already exists');
  assert.equal(body.code, 'EMAIL_ALREADY_EXISTS');
});

test('auth register validates payload shape', async (t) => {
  const app = await build();
  t.after(() => app.close());

  const response = await app.inject({
    method: 'POST',
    url: '/auth/register',
    payload: {
      firstName: '',
      lastName: 'User',
      email: 'invalid-email',
      password: '123'
    }
  });

  assert.equal(response.statusCode, 400);
  const body = response.json();
  assert.equal(body.message, 'Invalid register payload');
  assert.equal(Array.isArray(body.errors), true);
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
