import type { FastifyReply, FastifyRequest } from 'fastify';

import type { ListHotelsUseCase } from '../../../application/use-cases/list-hotels.use-case';

export class ListHotelsController {
  constructor(private readonly useCase: ListHotelsUseCase) {}

  async handle(_request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const hotels = await this.useCase.execute();
    reply.send(hotels);
  }
}
