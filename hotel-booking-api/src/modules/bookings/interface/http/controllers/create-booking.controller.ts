import type { FastifyReply, FastifyRequest } from 'fastify';

import type { CreateBookingUseCase } from '../../../application/use-cases/create-booking.use-case';
import { validateInput } from '../../../../../shared/validation/validate-input';
import { createBookingBodySchema } from '../schemas/create-booking.schema';

type CreateBookingRequest = FastifyRequest<{ Body: unknown }>;

export class CreateBookingController {
  constructor(private readonly useCase: CreateBookingUseCase) {}

  async handle(request: CreateBookingRequest, reply: FastifyReply): Promise<void> {
    const input = validateInput({
      schema: createBookingBodySchema,
      input: request.body,
      reply,
      message: 'Invalid booking payload'
    });
    if (!input) {
      return;
    }

    const createdBooking = await this.useCase.execute(input);
    if (!createdBooking) {
      reply.code(400).send({
        message: 'Invalid booking dates'
      });
      return;
    }

    reply.code(201).send(createdBooking);
  }
}
