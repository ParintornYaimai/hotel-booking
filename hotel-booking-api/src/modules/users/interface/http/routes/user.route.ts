import type { FastifyPluginAsync } from 'fastify';

import { userUseCase } from '../../../application/use-cases/get-user-by-id.use-case';
import { PgUserRepository } from '../../../infrastructure/repositories/pg-user.repository';
import { UserController } from '../controllers/get-user-by-id.controller';

export const userRoutes: FastifyPluginAsync = async (app) => {
  const repository = new PgUserRepository(app.db);
  const getUserByIdUseCase = new userUseCase(repository);

  const userController = new UserController(getUserByIdUseCase);

  // User Info
  app.get('/me/:userId', async (request, reply) => userController.handle(request, reply));
  // Update user info
  app.patch('/me', async (request, reply) => userController.handle(request, reply ));
  //delete account 
  app.delete('/me', async (request, reply) => userController.handle(request, reply))
  //get user preferrence
  app.get('/me/preferences', async(request, reply) => userController.handle(request, reply))
  //update preferrence user
  app.patch('/me/preferences', async(request, reply) => userController.handle(request, reply))
};
