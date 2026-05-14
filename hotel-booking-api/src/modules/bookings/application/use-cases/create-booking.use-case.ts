import type { Booking, CreateBookingInput } from '../../domain/entities/booking';
import type { BookingRepository } from '../../domain/repositories/booking.repository';

function isValidDateInput(value: string): boolean {
  const parsed = Date.parse(value);
  return Number.isFinite(parsed);
}

export class CreateBookingUseCase {
  constructor(private readonly repository: BookingRepository) {}

  async execute(input: CreateBookingInput): Promise<Booking | null> {
    if (!isValidDateInput(input.checkInDate) || !isValidDateInput(input.checkOutDate)) {
      return null;
    }

    const checkInTs = Date.parse(input.checkInDate);
    const checkOutTs = Date.parse(input.checkOutDate);
    if (checkOutTs <= checkInTs) {
      return null;
    }

    return this.repository.create(input);
  }
}
