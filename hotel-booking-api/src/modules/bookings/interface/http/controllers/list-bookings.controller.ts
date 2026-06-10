import type { FastifyReply, FastifyRequest } from 'fastify';

import type { ListBookingsUseCase } from '../../../application/use-cases/list-bookings.use-case';
import { validateInput } from '@/shared/validation/validate-input';
import { listBookingsQuerySchema } from '../schemas/list-bookings.schema';

export class ListBookingsController {
  constructor(private readonly useCase: ListBookingsUseCase) {}

  async handle(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const query = validateInput({
      schema: listBookingsQuerySchema,
      input: request.query,
      reply,
      message: 'Invalid query string'
    });
    if (!query) {
      return;
    }

    const bookings = await this.useCase.execute(query);
    reply.send(bookings);
  }
}
