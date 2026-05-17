import { AppError } from './app-error';

interface UnauthorizedErrorOptions {
  code?: string;
  details?: unknown;
}

export class UnauthorizedError extends AppError {
  constructor(message = 'Unauthorized', options: UnauthorizedErrorOptions = {}) {
    super(message, {
      statusCode: 401,
      code: options.code ?? 'UNAUTHORIZED',
      details: options.details
    });
    this.name = 'UnauthorizedError';
  }
}
