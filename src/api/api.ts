import { z } from 'zod';
import { COUNTRIES_DATA } from '../components/CountrySelector/countries-data/countries-data';
export type CountryCode = (typeof COUNTRIES_DATA)[number]['code'];

interface address {
  id?: string;
  streetName: string;
  city: string;
  postalCode: string;
  country: CountryCode;
}

export interface SignUpData {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  dateOfBirth: string;
  custom: {
    type: {
      key: string;
    };
    fields: {
      petName: string;
      petBirthDate: string;
    };
  };
  addresses: address[];
  shippingAddressIds?: string[] | number[];
  billingAddressIds?: string[] | number[];
}

const CLIENT_ID = 'QMdMW3dn2QFBIFpoFRm_yfE0';
const SECRET_ID = 'CV6y3lEHvhTtkY4a-8wFxZ9d4hVzfIOw';
const PROJECT_KEY = 'ecommerce2v';
const REGION = 'europe-west1.gcp';
const API_URL = `https://api.${REGION}.commercetools.com/${PROJECT_KEY}`;
const CUSTOMER_ENDPOINT = `${API_URL}/customers`;

const OAuthErrorSchema = z.object({
  error: z.string(),
  error_description: z.string().optional(),
  message: z.string().optional(),
});

const TokenResponseSchema = z.object({
  access_token: z.string(),
  expires_in: z.number(),
  token_type: z.string(),
});

export async function getAccessToken(): Promise<string> {
  const clientId = CLIENT_ID;
  const clientSecret = SECRET_ID;
  const authUrl = `https://auth.${REGION}.commercetools.com/oauth/token`;

  const basicAuth = btoa(`${clientId}:${clientSecret}`);

  const response = await fetch(authUrl, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basicAuth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });

  const raw: unknown = await response.json();

  if (!response.ok) {
    const parsedError = OAuthErrorSchema.safeParse(raw);
    if (parsedError.success) {
      throw new Error(
        `Token fetch failed: ${parsedError.data.error_description ?? parsedError.data.message ?? parsedError.data.error}`
      );
    }
    throw new Error('Token fetch failed: Unknown error response');
  }

  const parsedToken = TokenResponseSchema.safeParse(raw);
  if (!parsedToken.success) {
    throw new Error('Token fetch failed: Invalid response format');
  }
  console.log(parsedToken.data.access_token);
  return parsedToken.data.access_token;
}

const validCountryCodes = COUNTRIES_DATA.map((c) => c.code);

const CountryCodeSchema = z.enum(validCountryCodes as [string, ...string[]]);

const CreatedBySchema = z.object({
  clientId: z.string(),
  isPlatformClient: z.boolean(),
});

const SignUpResponseSchema = z.object({
  customer: z.object({
    id: z.string(),
    version: z.number(),
    versionModifiedAt: z.string(),
    lastMessageSequenceNumber: z.number(),
    createdAt: z.string(),
    lastModifiedAt: z.string(),
    lastModifiedBy: CreatedBySchema,
    createdBy: CreatedBySchema,
    email: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    dateOfBirth: z.string(),
    addresses: z.array(
      z.object({
        id: z.string().optional(),
        streetName: z.string(),
        city: z.string(),
        postalCode: z.string(),
        country: CountryCodeSchema,
      })
    ),
    shippingAddressIds: z.array(z.union([z.string(), z.number()])),
    billingAddressIds: z.array(z.union([z.string(), z.number()])),
    isEmailVerified: z.literal(false),
    customerGroupAssignments: z.array(z.unknown()),
    custom: z.object({
      type: z.object({
        typeId: z.string(),
        id: z.string(),
      }),
      fields: z.object({
        petName: z.string(),
        petBirthDate: z.string(),
      }),
    }),
    stores: z.array(z.unknown()),
    authenticationMode: z.string(),
  }),
});

export type SignUpResponse = z.infer<typeof SignUpResponseSchema>;

export async function signUpUser(
  data: SignUpData,
  token: string
): Promise<SignUpResponse> {
  const response = await fetch(CUSTOMER_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const raw: unknown = await response.json(); // ✅ Avoids any

  if (!response.ok) {
    const message =
      (raw as { message?: string }).message ?? response.statusText;
    throw new Error(`Sign-up failed: ${message}`);
  }

  const parsed = SignUpResponseSchema.safeParse(raw);

  if (!parsed.success) {
    console.error('Invalid response structure:', parsed.error.format());
    console.log('Raw response:', raw);
    throw new Error('Sign-up failed: Invalid response structure');
  }

  return parsed.data;
}
