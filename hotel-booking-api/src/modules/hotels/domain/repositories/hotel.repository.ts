import type { Hotel } from '../entities/hotel';

export interface HotelRepository {
  list(): Promise<Hotel[]>;
  findById(hotelId: string): Promise<Hotel | null>;
}
