import type { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import fp from 'fastify-plugin';

import { UnauthorizedError } from '@/shared/errors';

type AuthenticateHandler = (
  request: FastifyRequest,
  reply: FastifyReply
) => Promise<void>;

const authGuardPluginImpl: FastifyPluginAsync = async (app) => {
  const authenticate: AuthenticateHandler = async (request) => {
    try {
      await request.jwtVerify();
    } catch {
      throw new UnauthorizedError('Authentication required', {
        code: 'AUTHENTICATION_REQUIRED'
      });
    }
  };

  app.decorate('authenticate', authenticate);
};

export const authGuardPlugin = fp(authGuardPluginImpl, {
  name: 'auth-guard-plugin',
  dependencies: ['@fastify/jwt']
});
