import type { FastifyInstance } from 'fastify';

import { AppError } from '../errors/app-error';

export function setupErrorHandling(app: FastifyInstance): void {
  app.setNotFoundHandler((request, reply) => {
    reply.code(404).send({
      message: 'Route not found',
      code: 'ROUTE_NOT_FOUND',
      path: request.url
    });
  });

  app.setErrorHandler((error, request, reply) => {
    if (error instanceof AppError) {
      reply.code(error.statusCode).send({
        message: error.message,
        code: error.code,
        details: error.details ?? null
      });
      return;
    }

    const statusCode =
      typeof (error as { statusCode?: unknown }).statusCode === 'number'
        ? (error as { statusCode: number }).statusCode
        : 500;
    const message =
      typeof (error as { message?: unknown }).message === 'string'
        ? (error as { message: string }).message
        : '';

    if (statusCode >= 400 && statusCode < 500) {
      reply.code(statusCode).send({
        message: message || 'Request error',
        code: 'REQUEST_ERROR'
      });
      return;
    }

    request.log.error({ err: error }, 'Unhandled application error');
    reply.code(500).send({
      message: 'Internal server error',
      code: 'INTERNAL_SERVER_ERROR'
    });
  });
}
