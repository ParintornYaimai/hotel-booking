import type { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

import type { ListBookingsUseCase } from '../../../application/use-cases/list-bookings.use-case';

const bookingsQuerySchema = z.object({
  userId: z.string().min(1).optional()
});

export class ListBookingsController {
  constructor(private readonly useCase: ListBookingsUseCase) {}

  async handle(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const parsedQuery = bookingsQuerySchema.safeParse(request.query);
    if (!parsedQuery.success) {
      reply.code(400).send({
        message: 'Invalid query string'
      });
      return;
    }

    const bookings = await this.useCase.execute(parsedQuery.data);
    reply.send(bookings);
  }
}
