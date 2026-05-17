import type { FastifyReply, FastifyRequest } from 'fastify';

import type { LoginUseCase } from '../../../application/use-cases/login.use-case';
import { loginBodySchema } from '../schemas/login.schema';
import { validateInput } from '../../../../../shared/validation/validate-input';

type LoginRequest = FastifyRequest<{ Body: unknown }>;

export class LoginController {
  constructor(private readonly useCase: LoginUseCase) {}

  async handle(request: LoginRequest, reply: FastifyReply): Promise<void> {
    const input = validateInput({
      schema: loginBodySchema,
      input: request.body,
      reply,
      message: 'Invalid login payload'
    });
    
    if (!input) {
      return;
    }

    const loginResult = await this.useCase.execute(input);
    if (!loginResult) {
      reply.code(401).send({
        message: 'Invalid email or password'
      });
      return;
    }

    reply.send(loginResult);
  }
}
