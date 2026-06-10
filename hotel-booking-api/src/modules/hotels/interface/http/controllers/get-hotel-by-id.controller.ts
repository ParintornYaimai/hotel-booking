import type { FastifyReply, FastifyRequest } from 'fastify';

import type { GetHotelByIdUseCase } from '../../../application/use-cases/get-hotel-by-id.use-case';
import { validateInput } from '@/shared/validation/validate-input';
import { hotelParamsSchema } from '../schemas/get-hotel-by-id.schema';

export class GetHotelByIdController {
  constructor(private readonly useCase: GetHotelByIdUseCase) {}

  async handle(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const params = validateInput({
      schema: hotelParamsSchema,
      input: request.params,
      reply,
      message: 'Invalid hotel id'
    });
    if (!params) {
      return;
    }

    const hotel = await this.useCase.execute(params.hotelId);
    reply.send(hotel);
  }
}
