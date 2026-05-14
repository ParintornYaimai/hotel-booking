import assert from 'node:assert/strict';
import { test } from 'node:test';

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
