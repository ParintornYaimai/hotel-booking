import type { Booking, CreateBookingInput } from '../../domain/entities/booking';
import type { BookingRepository } from '../../domain/repositories/booking.repository';
import { BadRequestError, ConflictError } from '../../../../shared/errors';

function isValidDateInput(value: string): boolean {
  const parsed = Date.parse(value);
  return Number.isFinite(parsed);
}

export class CreateBookingUseCase {
  constructor(private readonly repository: BookingRepository) {}

  async execute(input: CreateBookingInput): Promise<Booking> {
    if (!isValidDateInput(input.checkInDate) || !isValidDateInput(input.checkOutDate)) {
      throw new BadRequestError('Invalid booking date format', {
        code: 'INVALID_BOOKING_DATE_FORMAT',
        details: {
          checkInDate: input.checkInDate,
          checkOutDate: input.checkOutDate
        }
      });
    }

    const checkInTs = Date.parse(input.checkInDate);
    const checkOutTs = Date.parse(input.checkOutDate);
    if (checkOutTs <= checkInTs) {
      throw new ConflictError('Check-out date must be after check-in date', {
        code: 'BOOKING_DATE_CONFLICT',
        details: {
          checkInDate: input.checkInDate,
          checkOutDate: input.checkOutDate
        }
      });
    }

    return this.repository.create(input);
  }
}
