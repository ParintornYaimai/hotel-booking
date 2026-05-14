import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import sensible from '@fastify/sensible';
import type { FastifyPluginAsync } from 'fastify';

import type { AppEnv } from '../config/env';

interface CorePluginsOptions {
  env: AppEnv;
}

export const corePlugins: FastifyPluginAsync<CorePluginsOptions> = async (
  app,
  { env }
) => {
  await app.register(sensible);
  await app.register(cors, { origin: env.CORS_ORIGIN });
  await app.register(helmet, { global: true });
};
