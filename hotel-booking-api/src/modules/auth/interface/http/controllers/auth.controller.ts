import type { FastifyReply, FastifyRequest } from 'fastify';

import type { AuthUseCasePort } from '../../../application/ports/auth-use-case.port';
import { loginBodySchema, registerBodySchema } from '../schemas/auth.schema';
import type { AppEnv } from '@/shared/config/env';
import { validateInput } from '@/shared/validation/validate-input';


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
    reply.code(201).send(registerResult);
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

    const loginResult = await this.useCase.login(input, this.buildSessionContext(request));

    reply.setCookie('refreshToken', loginResult.tokens.refreshToken, {
      signed: true,
      httpOnly: true,
      secure: this.nodeEnv === 'production',
      sameSite: 'strict',
      path: '/auth',
      maxAge: 7 * 24 * 60 * 60
    });

    reply.send({
      user: loginResult.user,
      accessToken: loginResult.tokens.accessToken
    });
  }

  async logOut(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const signedRefreshToken = request.cookies.refreshToken;
    const unsignedCookie =
      typeof signedRefreshToken === 'string'
        ? request.unsignCookie(signedRefreshToken)
        : null;
    const refreshToken = unsignedCookie?.valid ? unsignedCookie.value : undefined;

    const logoutResult = await this.useCase.logout(refreshToken);

    reply.clearCookie('refreshToken', {
      httpOnly: true,
      secure: this.nodeEnv === 'production',
      sameSite: 'strict',
      path: '/auth'
    });

    reply.send(logoutResult);
  }

  async accessToken(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const signedRefreshToken = request.cookies.refreshToken;
    const unsignedCookie =
      typeof signedRefreshToken === 'string'
        ? request.unsignCookie(signedRefreshToken)
        : null;
    const refreshToken = unsignedCookie?.valid ? unsignedCookie.value : undefined;

    const accessTokenResult = await this.useCase.refreshAccessToken(
      refreshToken,
      this.buildSessionContext(request)
    );

    reply.setCookie('refreshToken', accessTokenResult.refreshToken, {
      signed: true,
      httpOnly: true,
      secure: this.nodeEnv === 'production',
      sameSite: 'strict',
      path: '/auth',
      maxAge: 7 * 24 * 60 * 60
    });

    reply.send({
      accessToken: accessTokenResult.accessToken
    });
  }

  private buildSessionContext(request: FastifyRequest): {
    ipAddress: string | null;
    userAgent: string | null;
  } {
    return {
      ipAddress: request.ip ?? null,
      userAgent:
        typeof request.headers['user-agent'] === 'string'
          ? request.headers['user-agent']
          : null
    };
  }
}
