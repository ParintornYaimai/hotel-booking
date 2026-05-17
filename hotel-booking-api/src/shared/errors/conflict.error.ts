import { AppError } from './app-error';

interface ConflictErrorOptions {
  code?: string;
  details?: unknown;
}

export class ConflictError extends AppError {
  constructor(message = 'Conflict', options: ConflictErrorOptions = {}) {
    super(message, {
      statusCode: 409,
      code: options.code ?? 'CONFLICT',
      details: options.details
    });
    this.name = 'ConflictError';
  }
}
