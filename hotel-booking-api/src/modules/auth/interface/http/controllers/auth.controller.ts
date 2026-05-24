import type { FastifyReply, FastifyRequest } from 'fastify';

import type { AuthUseCasePort } from '../../../application/ports/auth-use-case.port';
import { loginBodySchema } from '../schemas/auth.schema';
import { validateInput } from '../../../../../shared/validation/validate-input';

type LoginRequest = FastifyRequest<{ Body: unknown }>;

export class AuthController {
  constructor(private readonly useCase: AuthUseCasePort) {}

  async register(request: LoginRequest, reply: FastifyReply): Promise<void> {
    const input = validateInput({
      schema: loginBodySchema,
      input: request.body,
      reply,
      message: 'Invalid login payload'
    });

    if (!input) {
      return;
    }

    const loginResult = await this.useCase.login(input);
    reply.send(loginResult);
  }

  async login(request: LoginRequest, reply: FastifyReply): Promise<void> {
    const input = validateInput({
      schema: loginBodySchema,
      input: request.body,
      reply,
      message: 'Invalid login payload'
    });

    if (!input) {
      return;
    }

    const loginResult = await this.useCase.login(input);
    reply.send(loginResult);
  }

  async logOut(request: LoginRequest, reply: FastifyReply): Promise<void> {
    const input = validateInput({
      schema: loginBodySchema,
      input: request.body,
      reply,
      message: 'Invalid login payload'
    });

    if (!input) {
      return;
    }

    const loginResult = await this.useCase.login(input);
    reply.send(loginResult);
  }

  async accessToken(request: LoginRequest, reply: FastifyReply): Promise<void> {
    const input = validateInput({
      schema: loginBodySchema,
      input: request.body,
      reply,
      message: 'Invalid login payload'
    });

    if (!input) {
      return;
    }

    const loginResult = await this.useCase.login(input);
    reply.send(loginResult);
  }
}
