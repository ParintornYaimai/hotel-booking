import type { FastifyReply, FastifyRequest } from 'fastify';

import type { GetHealthStatusUseCase } from '../../../application/use-cases/get-health-status.use-case';

export class GetHealthStatusController {
  constructor(private readonly useCase: GetHealthStatusUseCase) {}

  async handle(_request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const healthStatus = await this.useCase.execute();
    const statusCode = healthStatus.status === 'ok' ? 200 : 503;

    reply.code(statusCode).send(healthStatus);
  }
}
