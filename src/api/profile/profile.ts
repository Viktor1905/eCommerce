import {
  API_URL,
  CUSTOMER_ENDPOINT,
  customerResponse,
  CustomerResponseSchema,
} from '../sign-up/sign-up';

export function getRefreshTokenFromCookie(): string {
  const match = /(?:^|;\s*)refresh_token=([^;]+)/.exec(document.cookie);
  if (match) return match[1];
  throw new Error('Something went wrong, please try again later'); // no token
}

export const fetchProfile = async (token: string) => {
  const response = await fetch(`${API_URL}/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  const raw: unknown = await response.json();
  if (!response.ok) {
    throw new Error('Invalid or expired token');
  }

  const customerData = CustomerResponseSchema.safeParse(raw);
  if (!customerData.success) {
    throw new Error('Invalid response format');
  }
  return customerData.data;
};

export interface PetData {
  custom: {
    type: {
      key: string;
    };
    fields: {
      petName: string;
      petBirthDate: string;
    };
  };
}

export async function updatePetInfo({
  customer,
  token,
  petBirthDate,
  petName,
}: {
  customer: customerResponse;
  token: string;
  petBirthDate: string;
  petName: string;
}): Promise<customerResponse> {
  const parsedCustomer = CustomerResponseSchema.safeParse(customer);
  const customerVersion = parsedCustomer.data?.version;
  const customerId = parsedCustomer.data?.id;

  const actions = {
    action: 'setCustomType',
    type: {
      key: 'customerCustomFields', // must match your defined Type key
      typeId: 'type',
    },
    fields: {
      petName: petName,
      petBirthDate: petBirthDate,
    },
  };

  const body = {
    version: customerVersion ?? 1,
    actions: [actions],
  };
  console.log(body);
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
