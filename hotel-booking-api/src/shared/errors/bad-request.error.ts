import { AppError } from './app-error';

interface BadRequestErrorOptions {
  code?: string;
  details?: unknown;
}

export class BadRequestError extends AppError {
  constructor(message = 'Bad request', options: BadRequestErrorOptions = {}) {
    super(message, {
      statusCode: 400,
      code: options.code ?? 'BAD_REQUEST',
      details: options.details
    });
    this.name = 'BadRequestError';
  }
}
