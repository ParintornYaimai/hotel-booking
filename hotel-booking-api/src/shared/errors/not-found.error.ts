import { AppError } from './app-error';

interface NotFoundErrorOptions {
  code?: string;
  details?: unknown;
}

export class NotFoundError extends AppError {
  constructor(message = 'Resource not found', options: NotFoundErrorOptions = {}) {
    super(message, {
      statusCode: 404,
      code: options.code ?? 'NOT_FOUND',
      details: options.details
    });
    this.name = 'NotFoundError';
  }
}
