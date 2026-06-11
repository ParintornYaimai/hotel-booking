import assert from 'node:assert/strict';
import { test } from 'node:test';

import { buildApp } from '../../src/app';
import { build } from '../helper';

test('default root route', async (t) => {
  const app = await build();
  t.after(() => app.close());

  const response = await app.inject({
    method: 'GET',
    url: '/'
  });

  assert.equal(response.statusCode, 200);
  assert.deepEqual(response.json(), { root: true });
});

test('health route returns healthy status when database responds', async (t) => {
  const app = await build();
  t.after(() => app.close());

  const response = await app.inject({
    method: 'GET',
    url: '/health'
  });

  assert.equal(response.statusCode, 200);
  assert.deepEqual(response.json(), {
    status: 'ok',
    database: 'up'
  });
});

test('health route returns 503 when database is unavailable', async (t) => {
  const app = buildApp({
    logger: false,
    env: {
      NODE_ENV: 'test',
      LOG_LEVEL: 'silent'
    }
  });
  await app.ready();
  t.after(() => app.close());

  app.db.query = async () => {
    throw new Error('database unavailable');
  };

  const response = await app.inject({
    method: 'GET',
    url: '/health'
  });

  assert.equal(response.statusCode, 503);
  assert.deepEqual(response.json(), {
    status: 'error',
    database: 'down'
  });
});
