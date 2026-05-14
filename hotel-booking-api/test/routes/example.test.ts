import assert from 'node:assert/strict';
import { test } from 'node:test';

import { build } from '../helper';

test('example route is loaded', async (t) => {
  const app = await build();
  t.after(() => app.close());

  const response = await app.inject({
    method: 'GET',
    url: '/example'
  });

  assert.equal(response.statusCode, 200);
  assert.equal(response.payload, 'this is an example');
});
