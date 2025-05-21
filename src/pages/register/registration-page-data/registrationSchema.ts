import { z } from 'zod';
import PostalCodes from 'postal-codes-js';
import { COUNTRIES_DATA } from '../../../components/CountrySelector/countries-data/countries-data';

const today = new Date();

export const CountryCodeSchema = z
  .string()
  .refine((val) => COUNTRIES_DATA.some((c) => c.code === val), {
    message: 'Please select a country',
  });

const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
const userSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name must be at least 1 character')
    .regex(
      nameRegex,
      'First name can only contain letters and spaces, without leading or trailing spaces'
    ),
  lastName: z
    .string()
    .min(1, 'Last name must be at least 2 characters')
    .regex(
      nameRegex,
      'Last name can only contain letters and spaces, without leading or trailing spaces'
    ),
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
  email: z
    .string()
    .min(1, 'Email is required')
    .superRefine((val, ctx) => {
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
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must include an uppercase letter')
    .regex(/[a-z]/, 'Password must include a lowercase letter')
    .regex(/[0-9]/, 'Password must include a number')
    .refine((val: string): boolean => !/\s/.test(val), {
      message: 'Password must not contain spaces',
    }),
});

const petSchema = z.object({
  petName: z
    .string()
    .min(1, 'First name must be at least 1 character')
    .regex(nameRegex, 'Pet name can only contain letters and spaces'),
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

const postalCodeRegex = /^[A-Za-z0-9]+([ -][A-Za-z0-9]+)*$/;

const shippingAddressSchema = z.object({
  shippingStreetName: z.string().min(1, 'Street name must be at least 1 character'),
  shippingCity: z.string().min(1, 'City name must be at least 1 character'),
  shippingPostalCode: z
    .string()
    .regex(postalCodeRegex, 'Please enter postal code in valid format (ex. 123-456, ME12 123)'),
  shippingCountry: CountryCodeSchema,
});

const billingAddressSchema = z.object({
  billingStreetName: z.string().min(1, 'Street name must be at least 1 character').optional(),
  billingCity: z.string().min(1, 'City name must be at least 1 character').optional(),
  billingPostalCode: z
    .string()
    .regex(postalCodeRegex, 'Please enter postal code in valid format (ex. 123-456, ME12 123)')
    .optional(),
  billingCountry: CountryCodeSchema.optional(),
});

export const flatSchema = userSchema
  .merge(loginSchema)
  .merge(petSchema)
  .merge(shippingAddressSchema)
  .merge(billingAddressSchema)
  .extend({
    allDefaultAddress: z.boolean().optional(),
    billingDefaultAddress: z.boolean().optional(),
    shippingDefaultAddress: z.boolean().optional(),
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
      message: '',
      path: ['sameAsShipping'],
    }
  )
  .superRefine((data, ctx) => {
    if (!data.billingCountry) return;
    const result = PostalCodes.validate(data.billingCountry, data.billingPostalCode ?? '');
    if (result !== true) {
      ctx.addIssue({
        path: ['billingPostalCode'],
        message: 'Invalid postal code for selected country',
        code: z.ZodIssueCode.custom,
      });
    }
  })
  .superRefine((data, ctx) => {
    const result = PostalCodes.validate(data.shippingCountry, data.shippingPostalCode);
    if (result !== true) {
      ctx.addIssue({
        path: ['shippingPostalCode'],
        message: 'Invalid postal code for selected country',
        code: z.ZodIssueCode.custom,
      });
    }
  });

export type FormFields = z.infer<typeof optionalSchema>;

export type FieldKey = keyof FormFields;
