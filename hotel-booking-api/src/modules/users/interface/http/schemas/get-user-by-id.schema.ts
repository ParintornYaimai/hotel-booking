import { z } from 'zod';

export const userParamsSchema = z.object({
  userId: z.string().min(1)
});
