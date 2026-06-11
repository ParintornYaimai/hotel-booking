import Fastify, { type FastifyInstance, type FastifyServerOptions } from 'fastify';

import { authRoutes } from '@/modules/auth/interface/http/routes/auth.route';
import { bookingRoutes } from '@/modules/bookings/interface/http/routes/booking.route';
import { hotelRoutes } from '@/modules/hotels/interface/http/routes/hotel.route';
import { systemRoutes } from '@/modules/system/interface/http/routes/system.route';
import { userRoutes } from '@/modules/users/interface/http/routes/user.route';
import { loadEnv } from '@/shared/config/env';
import { authGuardPlugin } from '@/shared/plugins/auth-guard-plugin';
import { databasePlugin } from '@/shared/plugins/database-plugin';
import { corePlugins } from '@/shared/plugins/core-plugins';
import { setupErrorHandling } from '@/shared/plugins/error-handler-plugin';

export interface BuildAppOptions extends FastifyServerOptions {
  env?: NodeJS.ProcessEnv;
}

function buildLoggerOptions(env: ReturnType<typeof loadEnv>): NonNullable<FastifyServerOptions['logger']> {
  const options = {
    level: env.LOG_LEVEL,
    formatters: {
      level: (label: string) => ({ level: label.toUpperCase() })
    },
    timestamp: () => `,"time":"${new Date().toISOString()}"`
  };

  if (env.NODE_ENV !== 'production') {
    return {
      ...options,
      transport: {
        target: 'pino-pretty',
        options: {
          colorize: true,
          translateTime: 'SYS:yyyy-mm-dd HH:MM:ss.l o',
          ignore: 'pid,hostname'
        }
      }
    };
  }

  return options;
}

export function buildApp(options: BuildAppOptions = {}): FastifyInstance {
  const { env: envOverrides, ...fastifyOptions } = options;
  const env = loadEnv({ ...process.env, ...envOverrides });

  const app = Fastify({
    ...fastifyOptions,
    logger: fastifyOptions.logger ?? buildLoggerOptions(env)
  });

  app.decorate('env',env)

  setupErrorHandling(app);
  app.register(corePlugins, { env });
  app.register(authGuardPlugin);
  app.register(databasePlugin, { env });
  app.register(systemRoutes);
  app.register(authRoutes, { prefix: '/auth' });
  app.register(userRoutes, { prefix: '/users' });
  app.register(bookingRoutes, { prefix: '/bookings' });
  app.register(hotelRoutes, { prefix: '/hotels' });

  return app;
}
