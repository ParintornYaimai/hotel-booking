import type { Hotel } from '../../domain/entities/hotel';
import type { HotelRepository } from '../../domain/repositories/hotel.repository';

export class GetHotelByIdUseCase {
  constructor(private readonly repository: HotelRepository) {}

  execute(hotelId: string): Promise<Hotel | null> {
    return this.repository.findById(hotelId);
  }
}
