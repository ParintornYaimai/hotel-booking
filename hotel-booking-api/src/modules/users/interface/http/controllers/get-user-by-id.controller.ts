import type { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

import type { GetUserByIdUseCase } from '../../../application/use-cases/get-user-by-id.use-case';

const userParamsSchema = z.object({
  userId: z.string().min(1)
});

export class GetUserByIdController {
  constructor(private readonly useCase: GetUserByIdUseCase) {}

  async handle(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const params = userParamsSchema.safeParse(request.params);
    if (!params.success) {
      reply.code(400).send({
        message: 'Invalid user id'
      });
      return;
    }

    const user = await this.useCase.execute(params.data.userId);
    if (!user) {
      reply.code(404).send({
        message: 'User not found'
      });
      return;
    }

    reply.send(user);
  }
}
