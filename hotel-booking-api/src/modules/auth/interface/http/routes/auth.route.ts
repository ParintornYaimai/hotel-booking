import type { FastifyPluginAsync } from 'fastify';

import { LoginUseCase } from '../../../application/use-cases/login.use-case';
import { InMemoryAuthRepository } from '../../../infrastructure/repositories/in-memory-auth.repository';
import { LoginController } from '../controllers/login.controller';

export const authRoutes: FastifyPluginAsync = async (app) => {
  const repository = new InMemoryAuthRepository();
  const loginUseCase = new LoginUseCase(repository);
  const loginController = new LoginController(loginUseCase);

  app.post('/login', async (request, reply) =>
    loginController.handle(request, reply)
  );
};
