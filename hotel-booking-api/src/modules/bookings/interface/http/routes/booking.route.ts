import type { FastifyPluginAsync } from 'fastify';

import { CreateBookingUseCase } from '../../../application/use-cases/create-booking.use-case';
import { ListBookingsUseCase } from '../../../application/use-cases/list-bookings.use-case';
import { InMemoryBookingRepository } from '../../../infrastructure/repositories/in-memory-booking.repository';
import { PgBookingRepository } from '../../../infrastructure/repositories/pg-booking.repository';
import { CreateBookingController } from '../controllers/create-booking.controller';
import { ListBookingsController } from '../controllers/list-bookings.controller';

export const bookingRoutes: FastifyPluginAsync = async (app) => {
  const repository = app.db
    ? new PgBookingRepository(app.db)
    : new InMemoryBookingRepository();
  const listBookingsUseCase = new ListBookingsUseCase(repository);
  const createBookingUseCase = new CreateBookingUseCase(repository);

  const listBookingsController = new ListBookingsController(listBookingsUseCase);
  const createBookingController = new CreateBookingController(createBookingUseCase);

  app.get('/', async (request, reply) =>
    listBookingsController.handle(request, reply)
  );

  app.post('/', async (request, reply) =>
    createBookingController.handle(request, reply)
  );
};
