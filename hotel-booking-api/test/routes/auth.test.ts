import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { test } from 'node:test';

import { build } from '../helper';

interface UserSessionRow {
  session_token: string;
  revoked_at: Date | null;
  ip_address: string | null;
  user_agent: string | null;
}

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

  const sessionResult = await app.db.query<UserSessionRow>(
    `SELECT session_token, revoked_at, ip_address, user_agent
     FROM user_sessions
     WHERE user_id = $1::uuid
     ORDER BY created_at DESC NULLS LAST
     LIMIT 1`,
    [body.user.id]
  );

  assert.equal(sessionResult.rowCount, 1);
  assert.equal(sessionResult.rows[0].revoked_at, null);
  assert.equal(sessionResult.rows[0].ip_address, '127.0.0.1');
  assert.equal(typeof sessionResult.rows[0].session_token, 'string');
  assert.equal(sessionResult.rows[0].session_token.length > 0, true);
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

test('auth logout clears refresh token cookie', async (t) => {
  const app = await build();
  t.after(() => app.close());
  const email = `logout-${randomUUID()}@hotel-booking.local`;
  const password = 'Password123!';

  const registerResponse = await app.inject({
    method: 'POST',
    url: '/auth/register',
    payload: {
      firstName: 'Logout',
      lastName: 'User',
      email,
      password
    }
  });

  assert.equal(registerResponse.statusCode, 201);

  const loginResponse = await app.inject({
    method: 'POST',
    url: '/auth/login',
    payload: {
      email,
      password
    }
  });

  assert.equal(loginResponse.statusCode, 200);
  const loginBody = loginResponse.json();
  const sessionBeforeLogout = await app.db.query<UserSessionRow>(
    `SELECT session_token, revoked_at, ip_address, user_agent
     FROM user_sessions
     WHERE user_id = $1::uuid
     ORDER BY created_at DESC NULLS LAST
     LIMIT 1`,
    [loginBody.user.id]
  );

  assert.equal(sessionBeforeLogout.rowCount, 1);
  assert.equal(sessionBeforeLogout.rows[0].revoked_at, null);

  const cookieHeader = loginResponse.headers['set-cookie'];
  const refreshTokenCookie = Array.isArray(cookieHeader)
    ? cookieHeader[0]
    : cookieHeader;

  assert.equal(typeof refreshTokenCookie, 'string');

  const response = await app.inject({
    method: 'DELETE',
    url: '/auth/logout',
    headers: {
      cookie: refreshTokenCookie.split(';', 1)[0]
    }
  });

  assert.equal(response.statusCode, 200);
  const body = response.json();
  assert.equal(body.message, 'User logged out successfully');

  const setCookieHeader = response.headers['set-cookie'];
  const setCookieValues = Array.isArray(setCookieHeader)
    ? setCookieHeader
    : setCookieHeader
      ? [setCookieHeader]
      : [];

  assert.equal(setCookieValues.some((value) => value.includes('refreshToken=')), true);
  assert.equal(setCookieValues.some((value) => value.includes('Path=/auth')), true);
  assert.equal(setCookieValues.some((value) => value.includes('Max-Age=0')), true);

  const sessionAfterLogout = await app.db.query<UserSessionRow>(
    `SELECT session_token, revoked_at, ip_address, user_agent
     FROM user_sessions
     WHERE user_id = $1::uuid
     ORDER BY created_at DESC NULLS LAST
     LIMIT 1`,
    [loginBody.user.id]
  );

  assert.equal(sessionAfterLogout.rowCount, 1);
  assert.notEqual(sessionAfterLogout.rows[0].revoked_at, null);
});

test('auth access token rotates refresh token and invalidates the old session token', async (t) => {
  const app = await build();
  t.after(() => app.close());
  const email = `refresh-${randomUUID()}@hotel-booking.local`;
  const password = 'Password123!';

  const registerResponse = await app.inject({
    method: 'POST',
    url: '/auth/register',
    payload: {
      firstName: 'Refresh',
      lastName: 'User',
      email,
      password
    }
  });

  assert.equal(registerResponse.statusCode, 201);

  const loginResponse = await app.inject({
    method: 'POST',
    url: '/auth/login',
    payload: {
      email,
      password
    }
  });

  assert.equal(loginResponse.statusCode, 200);
  const loginBody = loginResponse.json();
  const sessionBeforeRefresh = await app.db.query<UserSessionRow>(
    `SELECT session_token, revoked_at, ip_address, user_agent
     FROM user_sessions
     WHERE user_id = $1::uuid
     ORDER BY created_at DESC NULLS LAST
     LIMIT 1`,
    [loginBody.user.id]
  );

  assert.equal(sessionBeforeRefresh.rowCount, 1);
  const previousSessionToken = sessionBeforeRefresh.rows[0].session_token;

  const loginCookieHeader = loginResponse.headers['set-cookie'];
  const previousRefreshCookie = Array.isArray(loginCookieHeader)
    ? loginCookieHeader[0]
    : loginCookieHeader;

  assert.equal(typeof previousRefreshCookie, 'string');

  const refreshResponse = await app.inject({
    method: 'POST',
    url: '/auth/access_token',
    headers: {
      cookie: previousRefreshCookie.split(';', 1)[0]
    }
  });

  assert.equal(refreshResponse.statusCode, 200);
  const refreshBody = refreshResponse.json();
  assert.equal(typeof refreshBody.accessToken, 'string');
  assert.equal(refreshBody.accessToken.length > 0, true);

  const refreshCookieHeader = refreshResponse.headers['set-cookie'];
  const refreshCookieValues = Array.isArray(refreshCookieHeader)
    ? refreshCookieHeader
    : refreshCookieHeader
      ? [refreshCookieHeader]
      : [];

  assert.equal(refreshCookieValues.some((value) => value.includes('refreshToken=')), true);
  assert.equal(refreshCookieValues.some((value) => value.includes('Path=/auth')), true);

  const rotatedRefreshCookie = refreshCookieValues[0];
  assert.equal(typeof rotatedRefreshCookie, 'string');

  const sessionAfterRefresh = await app.db.query<UserSessionRow>(
    `SELECT session_token, revoked_at, ip_address, user_agent
     FROM user_sessions
     WHERE user_id = $1::uuid
     ORDER BY created_at DESC NULLS LAST
     LIMIT 1`,
    [loginBody.user.id]
  );

  assert.equal(sessionAfterRefresh.rowCount, 1);
  assert.equal(sessionAfterRefresh.rows[0].revoked_at, null);
  assert.notEqual(sessionAfterRefresh.rows[0].session_token, previousSessionToken);

  const reuseOldRefreshTokenResponse = await app.inject({
    method: 'POST',
    url: '/auth/access_token',
    headers: {
      cookie: previousRefreshCookie.split(';', 1)[0]
    }
  });

  assert.equal(reuseOldRefreshTokenResponse.statusCode, 401);
  const reuseOldRefreshTokenBody = reuseOldRefreshTokenResponse.json();
  assert.equal(reuseOldRefreshTokenBody.code, 'INVALID_REFRESH_SESSION');

  const rotatedRefreshTokenResponse = await app.inject({
    method: 'POST',
    url: '/auth/access_token',
    headers: {
      cookie: rotatedRefreshCookie.split(';', 1)[0]
    }
  });

  assert.equal(rotatedRefreshTokenResponse.statusCode, 200);
});
