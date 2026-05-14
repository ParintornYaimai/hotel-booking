import type { Booking, CreateBookingInput } from '../../domain/entities/booking';
import type {
  BookingFilters,
  BookingRepository
} from '../../domain/repositories/booking.repository';

const INITIAL_BOOKINGS: Booking[] = [
  {
    id: 'booking_1',
    userId: 'user_1',
    hotelId: 'hotel_1',
    checkInDate: '2026-06-01',
    checkOutDate: '2026-06-03',
    status: 'confirmed',
    createdAt: '2026-05-10T10:00:00.000Z'
  }
];

export class InMemoryBookingRepository implements BookingRepository {
  private readonly bookings: Booking[] = [...INITIAL_BOOKINGS];

  async list(filters?: BookingFilters): Promise<Booking[]> {
    if (!filters?.userId) {
      return [...this.bookings];
    }

    return this.bookings.filter((booking) => booking.userId === filters.userId);
  }

  async create(input: CreateBookingInput): Promise<Booking> {
    const booking: Booking = {
      id: `booking_${this.bookings.length + 1}`,
      userId: input.userId,
      hotelId: input.hotelId,
      checkInDate: input.checkInDate,
      checkOutDate: input.checkOutDate,
      status: 'confirmed',
      createdAt: new Date().toISOString()
    };

    this.bookings.push(booking);
    return booking;
  }
}
