import { AppError } from './app-error';

interface ForbiddenErrorOptions {
  code?: string;
  details?: unknown;
}

export class ForbiddenError extends AppError {
  constructor(message = 'Forbidden', options: ForbiddenErrorOptions = {}) {
    super(message, {
      statusCode: 403,
      code: options.code ?? 'FORBIDDEN',
      details: options.details
    });
    this.name = 'ForbiddenError';
  }
}
