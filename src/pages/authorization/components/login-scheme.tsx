import { z } from 'zod';

export const schema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .refine((val: string): boolean => val.includes('@'), {
      message: "Email address must contain an '@' symbol separating local part and domain name.",
    })
    .refine((val: string): boolean => val.trim() === val, {
      message: 'Email address must not contain leading or trailing whitespace.',
    })
    .refine(
      (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email),
      'Email must contain a domain name (e.g., example.com)'
    ),
  password: z
    .string()
    .regex(/\d+/gi, { message: 'Password must contain at least one digit' })
    .regex(/[A-ZА-Я]/, { message: 'Password must contain at least one uppercase letter' })
    .regex(/[a-zа-я]/, { message: 'Password must contain at least one lowercase letter' })
    .min(8, { message: 'Password must be longer than 8 characters' })
    .refine((val: string): boolean => !/\s/.test(val), {
      message: 'Password must not contain spaces',
    }),
});
