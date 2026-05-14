import Fastify, { type FastifyInstance, type FastifyServerOptions } from 'fastify';

import { authRoutes } from './modules/auth/interface/http/routes/auth.route';
import { bookingRoutes } from './modules/bookings/interface/http/routes/booking.route';
import { systemRoutes } from './modules/system/interface/http/routes/system.route';
import { userRoutes } from './modules/users/interface/http/routes/user.route';
import { loadEnv } from './shared/config/env';
import { corePlugins } from './shared/plugins/core-plugins';

export interface BuildAppOptions extends FastifyServerOptions {
  env?: NodeJS.ProcessEnv;
}

export function buildApp(options: BuildAppOptions = {}): FastifyInstance {
  const { env: envOverrides, ...fastifyOptions } = options;
  const env = loadEnv({ ...process.env, ...envOverrides });

  const app = Fastify({
    ...fastifyOptions,
    logger: fastifyOptions.logger ?? { level: env.LOG_LEVEL }
  });

  app.register(corePlugins, { env });
  app.register(systemRoutes);
  app.register(authRoutes, { prefix: '/auth' });
  app.register(userRoutes, { prefix: '/users' });
  app.register(bookingRoutes, { prefix: '/bookings' });

  return app;
}
