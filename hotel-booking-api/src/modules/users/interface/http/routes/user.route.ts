import type { FastifyPluginAsync } from 'fastify';

import { GetUserByIdUseCase } from '../../../application/use-cases/get-user-by-id.use-case';
import { ListUsersUseCase } from '../../../application/use-cases/list-users.use-case';
import { InMemoryUserRepository } from '../../../infrastructure/repositories/in-memory-user.repository';
import { GetUserByIdController } from '../controllers/get-user-by-id.controller';
import { ListUsersController } from '../controllers/list-users.controller';

export const userRoutes: FastifyPluginAsync = async (app) => {
  const repository = new InMemoryUserRepository();
  const listUsersUseCase = new ListUsersUseCase(repository);
  const getUserByIdUseCase = new GetUserByIdUseCase(repository);

  const listUsersController = new ListUsersController(listUsersUseCase);
  const getUserByIdController = new GetUserByIdController(getUserByIdUseCase);

  app.get('/', async (request, reply) =>
    listUsersController.handle(request, reply)
  );

  app.get('/:userId', async (request, reply) =>
    getUserByIdController.handle(request, reply)
  );
};
