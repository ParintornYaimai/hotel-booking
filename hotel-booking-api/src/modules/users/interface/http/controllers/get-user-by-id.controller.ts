import type { FastifyReply, FastifyRequest } from 'fastify';

import type { userUseCase } from '../../../application/use-cases/get-user-by-id.use-case';
import { validateInput } from '@/shared/validation/validate-input';
import { userParamsSchema } from '../schemas/get-user-by-id.schema';

export class UserController {
  constructor(private readonly useCase: userUseCase) {}

  async handle(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const params = validateInput({
      schema: userParamsSchema,
      input: request.params,
      reply,
      message: 'Invalid user id'
    });
    if (!params) {
      return;
    }

    const user = await this.useCase.execute(params.userId);
    reply.send(user);
  }
}
