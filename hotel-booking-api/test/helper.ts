import type { FastifyInstance } from 'fastify';

import { buildApp } from '../src/app';

export async function build(): Promise<FastifyInstance> {
  const app = buildApp({
    logger: false,
    env: {
      NODE_ENV: 'test',
      LOG_LEVEL: 'silent',
      DB_ENABLED: 'false'
    }
  });

  await app.ready();
  return app;
}
