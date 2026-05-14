import type { Booking } from '../../domain/entities/booking';
import type {
  BookingFilters,
  BookingRepository
} from '../../domain/repositories/booking.repository';

export class ListBookingsUseCase {
  constructor(private readonly repository: BookingRepository) {}

  execute(filters?: BookingFilters): Promise<Booking[]> {
    return this.repository.list(filters);
  }
}
