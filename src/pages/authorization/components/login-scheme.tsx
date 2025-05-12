import { z } from 'zod';

export const schema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .superRefine((val, ctx) => {
      console.log('RAW EMAIL INPUT:', JSON.stringify(val)); // отладка

      if (val !== val.trim()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Email must not have leading or trailing spaces',
        });
      }

      if (!val.includes('@')) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Email must contain an '@' symbol",
        });
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Email must contain a domain name (e.g., example.com)',
        });
      }
    }),
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
