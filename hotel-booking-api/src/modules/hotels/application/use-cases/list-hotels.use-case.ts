import type { Hotel } from '../../domain/entities/hotel';
import type { HotelRepository } from '../../domain/repositories/hotel.repository';

export class ListHotelsUseCase {
  constructor(private readonly repository: HotelRepository) {}

  execute(): Promise<Hotel[]> {
    return this.repository.list();
  }
}
