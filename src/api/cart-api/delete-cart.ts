import { getTokenFromCookie } from '../../pages/profile/ProfilePage';
import { API_URL } from '../sign-up/sign-up';
import { CartSchema } from './cart-types';

export const deleteCart = async (cartID: string, version: number) => {
  const token = getTokenFromCookie();
  if (!token) throw new Error('Invalid or expired token');
  const response = await fetch(`${API_URL}/me/carts/${cartID}?version=${version.toString()}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  const raw: unknown = await response.json();
  if (!response.ok) {
    throw new Error('Failed to delete cart');
  }

  console.log(raw);
  const cartData = CartSchema.safeParse(raw);
  if (!cartData.success) {
    throw new Error('Invalid response format');
  }
  return cartData.data;
};
