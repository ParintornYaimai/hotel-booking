import type { FastifyPluginAsync } from 'fastify';

import { GetExampleMessageUseCase } from '../../../application/use-cases/get-example-message.use-case';
import { GetServiceStatusUseCase } from '../../../application/use-cases/get-service-status.use-case';
import { StaticSystemRepository } from '../../../infrastructure/repositories/static-system.repository';
import { GetExampleMessageController } from '../controllers/get-example-message.controller';
import { GetRootStatusController } from '../controllers/get-root-status.controller';

export const systemRoutes: FastifyPluginAsync = async (app) => {
  const repository = new StaticSystemRepository();
  const getServiceStatusUseCase = new GetServiceStatusUseCase(repository);
  const getExampleMessageUseCase = new GetExampleMessageUseCase(repository);
  const getRootStatusController = new GetRootStatusController(
    getServiceStatusUseCase
  );
  const getExampleMessageController = new GetExampleMessageController(
    getExampleMessageUseCase
  );

  app.get('/', (request, reply) =>
    getRootStatusController.handle(request, reply)
  );

  app.get('/example', (request, reply) =>
    getExampleMessageController.handle(request, reply)
  );
};
