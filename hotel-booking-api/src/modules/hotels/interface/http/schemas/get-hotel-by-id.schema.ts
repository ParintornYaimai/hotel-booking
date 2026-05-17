import { z } from 'zod';

export const hotelParamsSchema = z.object({
  hotelId: z.string().min(1)
});
