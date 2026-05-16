import { randomUUID } from 'node:crypto';

import type { Pool } from 'pg';

import type { Booking, CreateBookingInput } from '../../domain/entities/booking';
import type {
  BookingFilters,
  BookingRepository
} from '../../domain/repositories/booking.repository';

interface BookingRow {
  id: string;
  user_id: string;
  hotel_id: string;
  check_in: string;
  check_out: string;
  status: string;
  created_at: string;
}

function mapBooking(row: BookingRow): Booking {
  return {
    id: row.id,
    userId: row.user_id,
    hotelId: row.hotel_id,
    checkInDate: row.check_in,
    checkOutDate: row.check_out,
    status: row.status,
    createdAt: row.created_at
  };
}

export class PgBookingRepository implements BookingRepository {
  constructor(private readonly db: Pool) {}

  async list(filters?: BookingFilters): Promise<Booking[]> {
    if (filters?.userId) {
      const filtered = await this.db.query<BookingRow>(
        `SELECT id::text, user_id::text, hotel_id::text, check_in::text, check_out::text, status, created_at::text
         FROM bookings
         WHERE user_id::text = $1
         ORDER BY created_at DESC NULLS LAST`,
        [filters.userId]
      );

      return filtered.rows.map(mapBooking);
    }

    const result = await this.db.query<BookingRow>(
      `SELECT id::text, user_id::text, hotel_id::text, check_in::text, check_out::text, status, created_at::text
       FROM bookings
       ORDER BY created_at DESC NULLS LAST`
    );

    return result.rows.map(mapBooking);
  }

  async create(input: CreateBookingInput): Promise<Booking> {
    const bookingId = randomUUID();

    const roomTypeResult = await this.db.query<{ id: string }>(
      `SELECT id::text
       FROM room_types
       WHERE hotel_id::text = $1
       ORDER BY created_at ASC NULLS LAST
       LIMIT 1`,
      [input.hotelId]
    );

    if (roomTypeResult.rowCount === 0) {
      throw new Error(
        `Cannot create booking: no room type found for hotel ${input.hotelId}`
      );
    }

    const roomTypeId = roomTypeResult.rows[0].id;

    const insertResult = await this.db.query<BookingRow>(
      `INSERT INTO bookings (
         id,
         user_id,
         hotel_id,
         room_type_id,
         check_in,
         check_out,
         adult_count,
         child_count,
         has_pet,
         has_car,
         room_count,
         status,
         created_at,
         updated_at
       )
       VALUES (
         $1::uuid,
         $2::uuid,
         $3::uuid,
         $4::uuid,
         $5::date,
         $6::date,
         2,
         0,
         false,
         false,
         1,
         'confirmed',
         CURRENT_TIMESTAMP,
         CURRENT_TIMESTAMP
       )
       RETURNING id::text, user_id::text, hotel_id::text, check_in::text, check_out::text, status, created_at::text`,
      [
        bookingId,
        input.userId,
        input.hotelId,
        roomTypeId,
        input.checkInDate,
        input.checkOutDate
      ]
    );

    return mapBooking(insertResult.rows[0]);
  }
}
