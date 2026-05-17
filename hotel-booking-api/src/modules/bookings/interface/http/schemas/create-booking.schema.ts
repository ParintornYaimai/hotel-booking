import { z } from 'zod';

export const createBookingBodySchema = z.object({
  userId: z.string().min(1),
  hotelId: z.string().min(1),
  checkInDate: z.iso.date(),
  checkOutDate: z.iso.date()
});
