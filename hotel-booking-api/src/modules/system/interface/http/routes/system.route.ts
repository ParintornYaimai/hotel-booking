import type { FastifyPluginAsync } from 'fastify';

import { GetHealthStatusUseCase } from '../../../application/use-cases/get-health-status.use-case';
import { GetExampleMessageUseCase } from '../../../application/use-cases/get-example-message.use-case';
import { GetServiceStatusUseCase } from '../../../application/use-cases/get-service-status.use-case';
import { PgHealthCheckRepository } from '../../../infrastructure/repositories/pg-health-check.repository';
import { StaticSystemRepository } from '../../../infrastructure/repositories/static-system.repository';
import { GetHealthStatusController } from '../controllers/get-health-status.controller';
import { GetExampleMessageController } from '../controllers/get-example-message.controller';
import { GetRootStatusController } from '../controllers/get-root-status.controller';

export const systemRoutes: FastifyPluginAsync = async (app) => {
  const systemRepository = new StaticSystemRepository();
  const healthRepository = new PgHealthCheckRepository(app.db);
  const getServiceStatusUseCase = new GetServiceStatusUseCase(systemRepository);
  const getExampleMessageUseCase = new GetExampleMessageUseCase(systemRepository);
  const getHealthStatusUseCase = new GetHealthStatusUseCase(healthRepository);
  const getRootStatusController = new GetRootStatusController(
    getServiceStatusUseCase
  );
  const getExampleMessageController = new GetExampleMessageController(
    getExampleMessageUseCase
  );
  const getHealthStatusController = new GetHealthStatusController(
    getHealthStatusUseCase
  );

  app.get('/', (request, reply) =>
    getRootStatusController.handle(request, reply)
  );

  app.get('/health', async (request, reply) =>
    getHealthStatusController.handle(request, reply)
  );

  app.get('/example', (request, reply) =>
    getExampleMessageController.handle(request, reply)
  );
};
