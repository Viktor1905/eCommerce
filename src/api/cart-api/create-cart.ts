import { getTokenFromCookie } from '../../pages/profile/ProfilePage';
import { API_URL } from '../sign-up/sign-up';
import { CartSchema } from './cart-types';
import { getAnonymsTokenFromCookie } from '../../pages/profile/ProfilePage';

export const createCart = async () => {
  let token = getTokenFromCookie();
  token ??= getAnonymsTokenFromCookie();

  if (!token) throw new Error('Invalid or expired token');

  const response = await fetch(`${API_URL}/me/carts`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      currency: 'USD',
    }),
  });

  const raw: unknown = await response.json();
  if (!response.ok) {
    throw new Error('Failed to create a cart');
  }

  const cartData = CartSchema.safeParse(raw);
  if (!cartData.success) {
    throw new Error('Invalid response format');
  }
  return cartData.data;
};
