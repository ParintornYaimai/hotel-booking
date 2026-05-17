import { z } from 'zod';

export const listBookingsQuerySchema = z.object({
  userId: z.string().min(1).optional()
});
