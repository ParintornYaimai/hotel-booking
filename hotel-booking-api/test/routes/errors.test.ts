import assert from 'node:assert/strict';
import { test } from 'node:test';

import { buildApp } from '../../src/app';
import { ConflictError } from '../../src/shared/errors';
import { build } from '../helper';

test('unknown route returns standard 404 payload', async (t) => {
  const app = await build();
  t.after(() => app.close());

  const response = await app.inject({
    method: 'GET',
    url: '/unknown-path'
  });

  assert.equal(response.statusCode, 404);
  const body = response.json();
  assert.equal(body.message, 'Route not found');
  assert.equal(body.code, 'ROUTE_NOT_FOUND');
  assert.equal(body.path, '/unknown-path');
});

test('unhandled error returns standard 500 payload', async (t) => {
  const app = buildApp({
    logger: false,
    env: {
      NODE_ENV: 'test',
      LOG_LEVEL: 'silent',
      DB_ENABLED: 'false'
    }
  });
  app.get('/_test/error', async () => {
    throw new Error('boom');
  });
  await app.ready();
  t.after(() => app.close());

  const response = await app.inject({
    method: 'GET',
    url: '/_test/error'
  });

  assert.equal(response.statusCode, 500);
  const body = response.json();
  assert.equal(body.message, 'Internal server error');
  assert.equal(body.code, 'INTERNAL_SERVER_ERROR');
});

test('application error returns mapped payload', async (t) => {
  const app = buildApp({
    logger: false,
    env: {
      NODE_ENV: 'test',
      LOG_LEVEL: 'silent',
      DB_ENABLED: 'false'
    }
  });
  app.get('/_test/app-error', async () => {
    throw new ConflictError('Conflict sample', {
      code: 'CONFLICT_SAMPLE',
      details: { source: 'test' }
    });
  });
  await app.ready();
  t.after(() => app.close());

  const response = await app.inject({
    method: 'GET',
    url: '/_test/app-error'
  });

  assert.equal(response.statusCode, 409);
  const body = response.json();
  assert.equal(body.message, 'Conflict sample');
  assert.equal(body.code, 'CONFLICT_SAMPLE');
  assert.equal(body.details.source, 'test');
});
