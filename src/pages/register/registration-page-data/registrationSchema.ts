import { z } from 'zod';
import { COUNTRIES_DATA } from '../../../components/CountrySelector/countries-data/countries-data';

const today = new Date();

export const CountryCodeSchema = z
  .enum([...COUNTRIES_DATA.map((c) => c.code)] as [string, ...string[]])
  .refine((val) => val !== '', { message: 'Please select a country' });

const userSchema = z.object({
  firstName: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(20, 'First name must be no longer than characters'),
  lastName: z
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .max(20, 'Last name must be no longer than characters'),
  dateOfBirth: z.string().refine((val) => {
    const dateOfBirth = new Date(val);
    let age = today.getFullYear() - dateOfBirth.getFullYear();
    const monthDiff = today.getMonth() - dateOfBirth.getMonth();
    const dayDiff = today.getDate() - dateOfBirth.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
    return age >= 13;
  }, 'You must be at least 13 years old'),
});

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Must include an uppercase letter')
    .regex(/[a-z]/, 'Must include a lowercase letter')
    .regex(/[0-9]/, 'Must include a number'),
});

const petSchema = z.object({
  petName: z.string().min(2, 'First name must be at least 2 characters').max(20),
  petBirthDate: z.string().refine((val) => {
    const dateOfBirth = new Date(val);
    let age = today.getFullYear() - dateOfBirth.getFullYear();
    const monthDiff = today.getMonth() - dateOfBirth.getMonth();
    const dayDiff = today.getDate() - dateOfBirth.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
    return age <= 35;
  }, 'Your pet must be very old... Try applying for Guinness World Records'),
});

const postalCodeRegex = /^(\d{5}(-\d{4})?|[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d)$/;

const shippingAddressSchema = z.object({
  shippingStreetName: z.string().min(5, 'Please enter a valid street name'),
  shippingCity: z.string().min(2, 'City name must be at least 2 characters').max(50),
  shippingPostalCode: z.string().regex(postalCodeRegex, 'Postal code must be valid (e.g., 12345)'),
  shippingCountry: CountryCodeSchema,
});

const billingAddressSchema = z.object({
  billingStreetName: z.string().min(5, 'Please enter a valid street name').optional(),
  billingCity: z.string().min(2, 'City name must be at least 2 characters').max(50).optional(),
  billingPostalCode: z
    .string()
    .regex(postalCodeRegex, 'Postal code must be valid (e.g., 12345)')
    .optional(),
  billingCountry: CountryCodeSchema.optional(),
});

export const flatSchema = userSchema
  .merge(loginSchema)
  .merge(petSchema)
  .merge(shippingAddressSchema)
  .merge(billingAddressSchema)
  .extend({
    defaultAddress: z.boolean().optional(),
  });

export const optionalSchema = flatSchema
  .extend({
    sameAsShipping: z.boolean().optional(),
  })
  .refine(
    (data) => {
      if (data.sameAsShipping) return true;

      // Parse billing fields only
      const { billingStreetName, billingCity, billingPostalCode, billingCountry } = data;

      const billingSchema = z.object({
        billingStreetName: flatSchema.shape.billingStreetName,
        billingCity: flatSchema.shape.billingCity,
        billingPostalCode: flatSchema.shape.billingPostalCode,
        billingCountry: flatSchema.shape.billingCountry,
      });

      const result = billingSchema.safeParse({
        billingStreetName,
        billingCity,
        billingPostalCode,
        billingCountry,
      });

      return result.success;
    },
    {
      message: 'Please fill billing address',
      path: ['sameAsShipping'],
    }
  );

export type FormFields = z.infer<typeof optionalSchema>;

export type FieldKey = keyof FormFields;
