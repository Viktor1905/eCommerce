import { API_URL, CustomerResponseSchema } from '../sign-up/sign-up';

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
