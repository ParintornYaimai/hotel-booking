import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import sensible from '@fastify/sensible';
import fastifyJwt from '@fastify/jwt';
import fastifyCookie from '@fastify/cookie';
import type { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';

import type { AppEnv } from '../config/env';

interface CorePluginsOptions {
  env: AppEnv;
}

const corePluginsImpl: FastifyPluginAsync<CorePluginsOptions> = async (
  app,
  { env }
) => {
  await app.register(sensible);
  await app.register(cors, { origin: env.CORS_ORIGIN, credentials: true });
  await app.register(helmet, { global: true });
  await app.register(fastifyJwt, { secret: env.JWT_SECRET });
  await app.register(fastifyCookie, { secret: env.COOKIE_SECRET });
};

export const corePlugins = fp(corePluginsImpl);
