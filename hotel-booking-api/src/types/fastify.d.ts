import 'fastify';
import type { FastifyReply, FastifyRequest } from 'fastify';
import type { Pool } from 'pg';

import type { AppEnv } from '@/shared/config/env';

declare module 'fastify' {
  interface FastifyInstance {
    authenticate(
      request: FastifyRequest,
      reply: FastifyReply
    ): Promise<void>;
    db: Pool;
    env: AppEnv;
  }
}
