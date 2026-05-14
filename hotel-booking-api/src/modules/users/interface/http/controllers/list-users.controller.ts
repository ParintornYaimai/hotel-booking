import type { FastifyReply, FastifyRequest } from 'fastify';

import type { ListUsersUseCase } from '../../../application/use-cases/list-users.use-case';

export class ListUsersController {
  constructor(private readonly useCase: ListUsersUseCase) {}

  async handle(_request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const users = await this.useCase.execute();
    reply.send(users);
  }
}
