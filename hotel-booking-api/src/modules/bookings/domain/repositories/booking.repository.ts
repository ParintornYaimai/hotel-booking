import type { Booking, CreateBookingInput } from '../entities/booking';

export interface BookingFilters {
  userId?: string;
}

export interface BookingRepository {
  list(filters?: BookingFilters): Promise<Booking[]>;
  create(input: CreateBookingInput): Promise<Booking>;
}
