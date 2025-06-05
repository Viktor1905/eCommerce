import { z } from 'zod';
import { API_CONFIG } from '../login/login';
import { getUserTokens, UsersToken } from '../login/user-tokens';
import {
  API_URL,
  CUSTOMER_ENDPOINT,
  customerResponse,
  CustomerResponseSchema,
  userAddress,
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
  const version = parsedCustomer.data?.version;
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
    version: version,
    actions: [actions],
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
    throw new Error('Something went wrong, please try again later'); //Sign-up failed: Invalid response structure
  }

  return parsed.data;
}

export async function updateUserInfo({
  customer,
  token,
  firstName,
  lastName,
  dateOfBirth,
  email,
}: {
  customer: customerResponse;
  token: string;
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
  email?: string;
}): Promise<customerResponse> {
  const parsedCustomer = CustomerResponseSchema.safeParse(customer);
  const version = parsedCustomer.data?.version;
  const customerId = parsedCustomer.data?.id;

  const actions = [];
  if (firstName) {
    actions.push({ action: 'setFirstName', firstName });
  }

  if (lastName) {
    actions.push({ action: 'setLastName', lastName });
  }

  if (dateOfBirth) {
    actions.push({ action: 'setDateOfBirth', dateOfBirth });
  }

  if (email) {
    actions.push({
      action: 'changeEmail',
      email,
    });
  }

  if (actions.length === 0) {
    throw new Error('No updates provided');
  }

  const body = {
    version,
    actions,
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
    throw new Error('Something went wrong, please try again later');
  }

  return parsed.data;
}

export async function changePassword({
  customer,
  token,
  currentPassword,
  newPassword,
}: {
  customer: customerResponse;
  token: string;
  currentPassword: string;
  newPassword: string;
}): Promise<customerResponse> {
  const parsedCustomer = CustomerResponseSchema.safeParse(customer);
  const version = parsedCustomer.data?.version;
  const customerId = parsedCustomer.data?.id;

  const response = await fetch(`${CUSTOMER_ENDPOINT}/password`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: customerId,
      version: version,
      currentPassword,
      newPassword,
    }),
  });

  const raw: unknown = await response.json();
  const parsed = CustomerResponseSchema.safeParse(raw);

  if (!parsed.success) {
    const rawJSON = ErrorResponseSchema.safeParse(raw);
    throw new Error(rawJSON.data?.message);
  }

  const loginData = { email: customer.email, password: newPassword };
  const usersToken: UsersToken = await getUserTokens(API_CONFIG, loginData);
  document.cookie = `refresh_token=${usersToken.refresh_token}; path=/; max-age=3600; secure; samesite=strict`;
  document.cookie = `access_token=${usersToken.access_token}; path=/; max-age=3600; secure; samesite=strict`;

  return parsed.data;
}

const ErrorResponseSchema = z.object({
  statusCode: z.number(),
  message: z.string(),
  errors: z.array(
    z.object({
      code: z.string(),
      message: z.string(),
    })
  ),
});

export async function setDefaultAddress({
  addressID,
  defaultAddressType,
  customer,
  token,
}: {
  addressID: string;
  defaultAddressType: string;
  customer: customerResponse;
  token: string;
}) {
  const parsedCustomer = CustomerResponseSchema.safeParse(customer);
  const version = parsedCustomer.data?.version;
  const customerId = parsedCustomer.data?.id;

  const body = {
    version,
    actions: [
      {
        action: defaultAddressType,
        addressId: addressID,
      },
    ],
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
    const rawJSON = ErrorResponseSchema.safeParse(raw);
    throw new Error(rawJSON.data?.message);
  }

  return parsed.data;
}

export async function changeAddress({
  addressID,
  address,
  customer,
  token,
  isBilling,
  isShipping,
}: {
  addressID: string;
  address: userAddress;
  customer: customerResponse;
  token: string;
  isBilling?: boolean;
  isShipping?: boolean;
}) {
  const parsedCustomer = CustomerResponseSchema.safeParse(customer);
  const version = parsedCustomer.data?.version;
  const customerId = parsedCustomer.data?.id;

  const actions: {
    action: string;
    addressId?: string;
    addressKey?: string;
    address?: userAddress;
  }[] = [];
  actions.push({
    action: 'changeAddress',
    addressId: addressID,
    address: address,
  });

  if (isBilling) {
    actions.push({
      action: 'addBillingAddressId',
      addressId: address.id,
    });
  }
  if (isBilling === false) {
    actions.push({
      action: 'removeBillingAddressId',
      addressId: address.id,
    });
  }

  if (isShipping) {
    actions.push({
      action: 'addShippingAddressId',
      addressId: address.id,
    });
  }
  if (isShipping === false) {
    actions.push({
      action: 'removeShippingAddressId',
      addressId: address.id,
    });
  }

  const body = {
    version,
    actions: actions,
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
    const rawJSON = ErrorResponseSchema.safeParse(raw);
    throw new Error(rawJSON.data?.message);
  }
  return parsed.data;
}

export async function addAddress({
  address,
  customer,
  token,
  isBilling,
  isShipping,
}: {
  address: userAddress;
  customer: customerResponse;
  token: string;
  isBilling: boolean;
  isShipping: boolean;
}) {
  const parsedCustomer = CustomerResponseSchema.safeParse(customer);
  const version = parsedCustomer.data?.version;
  const customerId = parsedCustomer.data?.id;

  const actions: {
    action: string;
    addressId?: string;
    addressKey?: string;
    address?: userAddress;
  }[] = [];
  actions.push({
    action: 'addAddress',
    address: address,
  });

  if (isBilling) {
    actions.push({
      action: 'addBillingAddressId',
      addressKey: address.key,
    });
  }

  if (isShipping) {
    actions.push({
      action: 'addShippingAddressId',
      addressKey: address.key,
    });
  }
  const body = {
    version,
    actions: actions,
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
    const rawJSON = ErrorResponseSchema.safeParse(raw);
    throw new Error(rawJSON.data?.message);
  }

  return parsed.data;
}

export async function removeAddress({
  address,
  customer,
  token,
}: {
  address: userAddress;
  customer: customerResponse;
  token: string;
}) {
  const parsedCustomer = CustomerResponseSchema.safeParse(customer);
  const version = parsedCustomer.data?.version;
  const customerId = parsedCustomer.data?.id;

  const actions: {
    action: string;
    addressId?: string;
    addressKey?: string;
    address?: userAddress;
  }[] = [];
  actions.push({
    action: 'removeAddress',
    addressId: address.id,
  });

  const body = {
    version,
    actions: actions,
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
    const rawJSON = ErrorResponseSchema.safeParse(raw);
    throw new Error(rawJSON.data?.message);
  }

  return parsed.data;
}
