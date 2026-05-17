import type { Hotel } from '../../domain/entities/hotel';
import type { HotelRepository } from '../../domain/repositories/hotel.repository';
import { NotFoundError } from '../../../../shared/errors';

export class GetHotelByIdUseCase {
  constructor(private readonly repository: HotelRepository) {}

  async execute(hotelId: string): Promise<Hotel> {
    const hotel = await this.repository.findById(hotelId);
    if (!hotel) {
      throw new NotFoundError('Hotel not found', {
        code: 'HOTEL_NOT_FOUND',
        details: { hotelId }
      });
    }

    return hotel;
  }
}
