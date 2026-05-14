import type { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

import type { LoginUseCase } from '../../../application/use-cases/login.use-case';

const loginBodySchema = z.object({
  email: z.email(),
  password: z.string().min(6)
});

type LoginRequest = FastifyRequest<{ Body: unknown }>;

export class LoginController {
  constructor(private readonly useCase: LoginUseCase) {}

  async handle(request: LoginRequest, reply: FastifyReply): Promise<void> {
    const parsedBody = loginBodySchema.safeParse(request.body);

    if (!parsedBody.success) {
      reply.code(400).send({
        message: 'Invalid login payload'
      });
      return;
    }

    const loginResult = await this.useCase.execute(parsedBody.data);
    if (!loginResult) {
      reply.code(401).send({
        message: 'Invalid email or password'
      });
      return;
    }

    reply.send(loginResult);
  }
}
