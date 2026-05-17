import type { Hotel } from '../../domain/entities/hotel';
import type { HotelRepository } from '../../domain/repositories/hotel.repository';

const IN_MEMORY_HOTELS: Hotel[] = [
  {
    id: 'hotel_1',
    name: 'Demo Grand Bangkok',
    slug: 'demo-grand-bangkok',
    destinationName: 'Bangkok',
    province: 'Bangkok',
    country: 'Thailand',
    starRating: 5,
    rating: 4.7,
    status: 'published'
  },
  {
    id: 'hotel_2',
    name: 'Demo Seaside Phuket',
    slug: 'demo-seaside-phuket',
    destinationName: 'Phuket',
    province: 'Phuket',
    country: 'Thailand',
    starRating: 4,
    rating: 4.4,
    status: 'published'
  }
];

export class InMemoryHotelRepository implements HotelRepository {
  async list(): Promise<Hotel[]> {
    return [...IN_MEMORY_HOTELS];
  }

  async findById(hotelId: string): Promise<Hotel | null> {
    const hotel = IN_MEMORY_HOTELS.find((candidate) => candidate.id === hotelId);
    return hotel ?? null;
  }
}
