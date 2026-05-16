import type { FastifyReply, FastifyRequest } from 'fastify';

import type { GetServiceStatusUseCase } from '../../../application/use-cases/get-service-status.use-case';

export class GetRootStatusController {
  constructor(private readonly useCase: GetServiceStatusUseCase) {}

  handle(_request: FastifyRequest, reply: FastifyReply): void {
    reply.send(this.useCase.execute());
  }
}
