import type { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

import type { CreateBookingUseCase } from '../../../application/use-cases/create-booking.use-case';

const createBookingBodySchema = z.object({
  userId: z.string().min(1),
  hotelId: z.string().min(1),
  checkInDate: z.iso.date(),
  checkOutDate: z.iso.date()
});

type CreateBookingRequest = FastifyRequest<{ Body: unknown }>;

export class CreateBookingController {
  constructor(private readonly useCase: CreateBookingUseCase) {}

  async handle(request: CreateBookingRequest, reply: FastifyReply): Promise<void> {
    const parsedBody = createBookingBodySchema.safeParse(request.body);
    if (!parsedBody.success) {
      reply.code(400).send({
        message: 'Invalid booking payload'
      });
      return;
    }

    const createdBooking = await this.useCase.execute(parsedBody.data);
    if (!createdBooking) {
      reply.code(400).send({
        message: 'Invalid booking dates'
      });
      return;
    }

    reply.code(201).send(createdBooking);
  }
}
