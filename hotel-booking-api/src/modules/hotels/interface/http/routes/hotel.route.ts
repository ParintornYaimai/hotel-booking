import type { FastifyPluginAsync } from 'fastify';

import { GetHotelByIdUseCase } from '../../../application/use-cases/get-hotel-by-id.use-case';
import { ListHotelsUseCase } from '../../../application/use-cases/list-hotels.use-case';
import { PgHotelRepository } from '../../../infrastructure/repositories/pg-hotel.repository';
import { GetHotelByIdController } from '../controllers/get-hotel-by-id.controller';
import { ListHotelsController } from '../controllers/list-hotels.controller';

export const hotelRoutes: FastifyPluginAsync = async (app) => {
  const repository = new PgHotelRepository(app.db);
  const listHotelsUseCase = new ListHotelsUseCase(repository);
  const getHotelByIdUseCase = new GetHotelByIdUseCase(repository);

  const listHotelsController = new ListHotelsController(listHotelsUseCase);
  const getHotelByIdController = new GetHotelByIdController(getHotelByIdUseCase);

  app.get('/', async (request, reply) =>
    listHotelsController.handle(request, reply)
  );

  app.get('/:hotelId', async (request, reply) =>
    getHotelByIdController.handle(request, reply)
  );
};
