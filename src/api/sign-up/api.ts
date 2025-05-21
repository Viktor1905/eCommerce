import { z } from 'zod';
import { COUNTRIES_DATA } from '../../components/CountrySelector/countries-data/countries-data';
import { CountryCodeSchema } from '../../pages/register/registration-page-data/registrationSchema';
export type CountryCode = (typeof COUNTRIES_DATA)[number]['code'];

interface address {
  id?: string;
  firstName: string;
  lastName: string;
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
  shippingAddressIds: string[];
  billingAddressIds: string[];
}

export async function setShippingAddress({
  successUserResponse,
  token,
  allDefaultAddress,
  shippingDefaultAddress,
  billingDefaultAddress,
}: {
  successUserResponse: userResponse;
  token: string;
  allDefaultAddress: boolean;
  shippingDefaultAddress: boolean;
  billingDefaultAddress: boolean;
}): Promise<customerResponse> {
  const parsedSuccessUserResponse = UserResponseSchema.safeParse(successUserResponse);

  const customerVersion = parsedSuccessUserResponse.data?.customer.version;

  const customerId = parsedSuccessUserResponse.data?.customer.id;
  const shippingAddressID = parsedSuccessUserResponse.data?.customer.addresses[0].id;
  const billingAddressID = parsedSuccessUserResponse.data?.customer.addresses[1]
    ? parsedSuccessUserResponse.data.customer.addresses[1].id
    : shippingAddressID;

  const baseActions = [
    {
      action: 'addShippingAddressId',
      addressId: shippingAddressID,
    },
    {
      action: 'addBillingAddressId',
      addressId: billingAddressID,
    },
  ];

  const defaultActions: Record<string, unknown>[] = [];

  if (allDefaultAddress || shippingDefaultAddress) {
    defaultActions.push({
      action: 'setDefaultShippingAddress',
      addressId: shippingAddressID,
    });
  }

  if (allDefaultAddress || billingDefaultAddress) {
    defaultActions.push({
      action: 'setDefaultBillingAddress',
      addressId: billingAddressID,
    });
  }

  console.log(defaultActions);

  const body = {
    version: customerVersion ?? 1,
    actions: [...baseActions, ...defaultActions],
  };
  const response = await fetch(CUSTOMER_ENDPOINT + `/${customerId ?? ''}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const raw: unknown = await response.json();
  const parsed = CustomerResponseSchema.safeParse(raw);
  if (!parsed.success) {
    console.error('Invalid response structure:', parsed.error);
    console.log('Raw response:', raw);
    throw new Error('Something went wrong, please try again later'); //Sign-up failed: Invalid response structure
  }

  return parsed.data;
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
    throw new Error('Something went wrong, please try again later'); //Token fetch failed: Unknown error response
  }

  const parsedToken = TokenResponseSchema.safeParse(raw);
  if (!parsedToken.success) {
    throw new Error('Something went wrong, please try again later'); //Token fetch failed: Unknown error response
  }
  console.log(parsedToken.data.access_token);
  return parsedToken.data.access_token;
}

const CreatedBySchema = z.object({
  clientId: z.string(),
  isPlatformClient: z.boolean(),
});

const LastModifiedBySchema = z.object({
  clientId: z.string().optional(),
  isPlatformClient: z.boolean(),
  user: z
    .object({
      typeId: z.string().optional(),
      id: z.string().optional(),
    })
    .optional(),
});

const CustomerResponseSchema = z
  .object({
    id: z.string(),
    version: z.number(),
    versionModifiedAt: z.string(),
    lastMessageSequenceNumber: z.number(),
    createdAt: z.string(),
    lastModifiedAt: z.string(),
    lastModifiedBy: LastModifiedBySchema,
    createdBy: CreatedBySchema,
    email: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    dateOfBirth: z.string(),
    addresses: z.array(
      z.object({
        id: z.string().optional(),
        firstName: z.string().optional(),
        lastName: z.string().optional(),
        streetName: z.string(),
        postalCode: z.string(),
        city: z.string(),
        country: CountryCodeSchema,
      })
    ),
    defaultShippingAddressId: z.string().optional(),
    defaultBillingAddressId: z.string().optional(),
    shippingAddressIds: z.array(z.string()),
    billingAddressIds: z.array(z.string()),
    isEmailVerified: z.boolean(),
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
  })
  .passthrough();

const UserResponseSchema = z.object({
  customer: CustomerResponseSchema,
});

export type userResponse = z.infer<typeof UserResponseSchema>;
export type customerResponse = z.infer<typeof CustomerResponseSchema>;

export async function signUpUser(data: SignUpData, token: string): Promise<userResponse> {
  const response = await fetch(CUSTOMER_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const raw: unknown = await response.json();

  console.log(raw);
  if (!response.ok) {
    const message = (raw as { message?: string }).message ?? response.statusText;
    throw new Error(`Sign-up failed: ${message}`);
  }
  const parsed = UserResponseSchema.safeParse(raw);

  if (!parsed.success) {
    console.error('Invalid response structure:', parsed.error.format());
    console.log('Raw response:', raw);
    throw new Error('Something went wrong, please try again later'); //'Sign-up failed: Invalid response structure'
  }

  return parsed.data;
}
