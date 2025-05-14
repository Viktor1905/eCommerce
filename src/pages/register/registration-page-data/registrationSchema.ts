import { z } from 'zod';

const today = new Date();

const userSchema = z.object({
  userFirstName: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(20, 'First name must be no longer than characters'),
  userLastName: z
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .max(20, 'Last name must be no longer than characters'),
  userBirthDate: z.string().refine((val) => {
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
  petName: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(20),
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

const postalCodeRegex =
  /^(\d{5}(-\d{4})?|[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d)$/;

const shippingAddressSchema = z.object({
  shippingStreet: z.string().min(5, 'Please enter a valid street name'),
  shippingCity: z
    .string()
    .min(2, 'City name must be at least 2 characters')
    .max(50),
  shippingZip: z
    .string()
    .regex(postalCodeRegex, 'Postal code must be valid (e.g., 12345)'),
  shippingCountry: z.string().min(1, 'Please select a country'),
});

const billingAddressSchema = z.object({
  billingStreet: z
    .string()
    .min(5, 'Please enter a valid street name')
    .optional(),
  billingCity: z
    .string()
    .min(2, 'City name must be at least 2 characters')
    .max(50)
    .optional(),
  billingZip: z
    .string()
    .regex(postalCodeRegex, 'Postal code must be valid (e.g., 12345)')
    .optional(),
  billingCountry: z.string().min(1, 'Please select a country').optional(),
});

//export const baseRegistrationSchema = z.object({
//  userSchema: userSchema,
//  loginSchema: loginSchema,
//  petSchema: petSchema,
//  addressSchema: addressSchema,
//});

export const flatSchema = userSchema
  .merge(loginSchema)
  .merge(petSchema)
  .merge(shippingAddressSchema)
  .merge(billingAddressSchema)
  .extend({
    defaultAddress: z.boolean().optional(),
  });

//export const fullRegistrationSchema = z.discriminatedUnion('sameAsShipping', [
//  flatSchema
//    .extend({
//      sameAsShipping: z.literal(true),
//    })
//    .merge(billingAddressSchema),
//  flatSchema.extend({
//    sameAsShipping: z.literal(false),
//  }),
//]);

export const optionalSchema = flatSchema
  .extend({
    sameAsShipping: z.boolean().optional(),
  })
  .refine(
    (data) => {
      if (data.sameAsShipping) return true;

      // Parse billing fields only
      const { billingStreet, billingCity, billingZip, billingCountry } = data;

      const billingSchema = z.object({
        billingStreet: flatSchema.shape.billingStreet,
        billingCity: flatSchema.shape.billingCity,
        billingZip: flatSchema.shape.billingZip,
        billingCountry: flatSchema.shape.billingCountry,
      });

      const result = billingSchema.safeParse({
        billingStreet,
        billingCity,
        billingZip,
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

//export type FormFields = z.infer<typeof fullRegistrationSchema>;
//
//export type FieldKey = keyof FormFields;

/*
  // user info
  | 'userSchema.firstName'
  | 'userSchema.lastName'
  | 'userSchema.birthDate'
  // login info
  | 'loginSchema.email'
  | 'loginSchema.password'
  //pet info
  | 'petSchema.petName'
  | 'petSchema.petBirthDate'
  // shipping address
  | 'addressSchema.street'
  | 'addressSchema.city'
  | 'addressSchema.zip'
  //billing address
  | 'billingAddress.street'
  | 'billingAddress.city'
  | 'billingAddress.zip'
  | 'sameAsShipping';
*/
