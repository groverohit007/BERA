import { z } from 'zod';

export const roleSchema = z.enum(['USER', 'ADMIN']);
export type Role = z.infer<typeof roleSchema>;

export const appUserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string().nullable(),
  image: z.string().url().nullable(),
  role: roleSchema,
});

export type AppUser = z.infer<typeof appUserSchema>;
