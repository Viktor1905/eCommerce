import { z } from 'zod';

const userInfoSchema = z.object({
  'user-first-name': z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(20),
  'user-last-name': z
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .max(20),
  'user-date-of-birth': z.string().refine((val) => {
    const dateOfBirth = new Date(val);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - dateOfBirth.getFullYear();
    const monthDiff = currentDate.getMonth() - dateOfBirth.getMonth();
    const dayDiff = currentDate.getDate() - dateOfBirth.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
    return age >= 13;
  }, 'You must be at least 13 years old'),
});

const userLoginSchema = z.object({
  'user-email': z.string().email('Please enter a valid email'),
  'user-password': z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Must include an uppercase letter')
    .regex(/[a-z]/, 'Must include a lowercase letter')
    .regex(/[0-9]/, 'Must include a number'),
});

const petInfoSchema = z.object({
  'pet-name': z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(20),
  'pet-date-of-birth': z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), 'Please enter a valid date'),
});

const postalCodeRegex =
  /^(\d{5}(-\d{4})?|[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d)$/;

const userAddressSchema = z.object({
  'user-street': z.string().min(5, 'Please enter a valid street name'),
  'user-city': z
    .string()
    .min(2, 'City name must be at least 2 characters')
    .max(50),
  'user-postal-code': z
    .string()
    .regex(
      postalCodeRegex,
      'Postal code must be valid (e.g., 12345 or A1B 2C3)'
    ),
  country: z.string().min(1, 'Please select a country'),
});

export const registrationSchema = userInfoSchema
  .merge(userLoginSchema)
  .merge(petInfoSchema)
  .merge(userAddressSchema);

export type FormValues = z.infer<typeof registrationSchema>;
export type FieldKey = keyof FormValues;
