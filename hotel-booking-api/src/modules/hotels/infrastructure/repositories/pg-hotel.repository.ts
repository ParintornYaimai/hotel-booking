import type { Pool } from 'pg';

import type { Hotel } from '../../domain/entities/hotel';
import type { HotelRepository } from '../../domain/repositories/hotel.repository';

interface HotelRow {
  id: string;
  name: string;
  slug: string | null;
  destination_name: string | null;
  province: string | null;
  country: string | null;
  star_rating: number | null;
  rating: number | null;
  status: string | null;
}

function mapHotel(row: HotelRow): Hotel {
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    destinationName: row.destination_name,
    province: row.province,
    country: row.country,
    starRating: row.star_rating,
    rating: row.rating,
    status: row.status
  };
}

export class PgHotelRepository implements HotelRepository {
  constructor(private readonly db: Pool) {}

  async list(): Promise<Hotel[]> {
    const result = await this.db.query<HotelRow>(
      `SELECT h.id::text,
              h.name,
              h.slug,
              d.name AS destination_name,
              h.province,
              h.country,
              h.star_rating,
              h.rating::float8 AS rating,
              h.status
       FROM hotels h
       LEFT JOIN destinations d ON d.id = h.destination_id
       WHERE h.deleted_at IS NULL
       ORDER BY h.created_at DESC NULLS LAST`
    );

    return result.rows.map(mapHotel);
  }

  async findById(hotelId: string): Promise<Hotel | null> {
    const result = await this.db.query<HotelRow>(
      `SELECT h.id::text,
              h.name,
              h.slug,
              d.name AS destination_name,
              h.province,
              h.country,
              h.star_rating,
              h.rating::float8 AS rating,
              h.status
       FROM hotels h
       LEFT JOIN destinations d ON d.id = h.destination_id
       WHERE h.deleted_at IS NULL
         AND h.id::text = $1
       LIMIT 1`,
      [hotelId]
    );

    if (result.rowCount === 0) {
      return null;
    }

    return mapHotel(result.rows[0]);
  }
}
