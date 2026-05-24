import type { FastifyPluginAsync } from 'fastify';

import { AuthUseCase } from '../../../application/use-cases/auth.use-case';
import { AuthRepository } from '../../../infrastructure/repositories/auth.repository';
import { AuthController } from '../controllers/auth.controller';

export const authRoutes: FastifyPluginAsync = async (app) => {
  const repository = new AuthRepository(app.db);
  const loginUseCase = new AuthUseCase(repository);
  const authController = new AuthController(loginUseCase);

  app.post('/register', async (req, reply) =>
    authController.register(req, reply)
  );
  app.post('/login', async (req, reply) => authController.login(req, reply));
  app.delete('/logout', async (req, reply) =>
    authController.logOut(req, reply)
  );
  app.post('/access_token', async (req, reply) =>
    authController.accessToken(req, reply)
  );
};
