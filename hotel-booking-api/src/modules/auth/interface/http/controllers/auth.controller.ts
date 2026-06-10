import type { FastifyReply, FastifyRequest } from 'fastify';

import type { AuthUseCasePort } from '../../../application/ports/auth-use-case.port';
import { loginBodySchema, registerBodySchema } from '../schemas/auth.schema';
import { validateInput } from '../../../../../shared/validation/validate-input';
import type { AppEnv } from '../../../../../shared/config/env';


export class AuthController {
  constructor(
    private readonly useCase: AuthUseCasePort,
    private readonly nodeEnv: AppEnv['NODE_ENV']
  ) {}

  async register(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const input = validateInput({
      schema: registerBodySchema,
      input: request.body,
      reply,
      message: 'Invalid register payload'
    });

    if (!input) {
      return;
    }

    const registerResult = await this.useCase.register(input);
    reply.send(registerResult);
  }

  async login(request: FastifyRequest, reply: FastifyReply): Promise<void> {
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

    reply.setCookie('refreshToken', loginResult.tokens.refreshToken, {
      signed: true,
      httpOnly: true,
      secure: this.nodeEnv === 'production',
      sameSite: 'strict',
      path: '/auth/refresh',
      maxAge: 7 * 24 * 60 * 60
    });

    reply.send({
      user: loginResult.user,
      accessToken: loginResult.tokens.accessToken
    });
  }

  async logOut(request: FastifyRequest, reply: FastifyReply): Promise<void> {
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

  async accessToken(request: FastifyRequest, reply: FastifyReply): Promise<void> {
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
