import type { FastifyReply, FastifyRequest } from 'fastify';

import type { GetExampleMessageUseCase } from '../../../application/use-cases/get-example-message.use-case';

export class GetExampleMessageController {
  constructor(private readonly useCase: GetExampleMessageUseCase) {}

  handle(_request: FastifyRequest, reply: FastifyReply): void {
    reply.send(this.useCase.execute());
  }
}
