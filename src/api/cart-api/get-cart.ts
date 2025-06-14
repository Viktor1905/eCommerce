import { getTokenFromCookie } from '../../pages/profile/ProfilePage';
import { API_URL } from '../sign-up/sign-up';
import { CartSchema } from './cart-types';
import { createCart } from './create-cart';
import { ErrorPayloadSchema } from '../../api/products/types/schemas';

export const getCartByCartID = async (cartID: string) => {
  const token = getTokenFromCookie();
  if (!token) throw new Error('Invalid or expired token');
  const response = await fetch(`${API_URL}/me/carts/${cartID}`, {
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

  const cartData = CartSchema.safeParse(raw);
  if (!cartData.success) {
    throw new Error('Invalid response format');
  }
  return cartData.data;
};

export const getLastActiveCart = async () => {
  const token = getTokenFromCookie();
  if (!token) throw new Error('Invalid or expired token');

  const response = await fetch(`${API_URL}/me/active-cart`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorBody: unknown = await response.json();
    const validationResult = ErrorPayloadSchema.safeParse(errorBody);

    if (validationResult.success) {
      const errMessage = validationResult.data.message;
      if (errMessage === 'No active cart exists.') {
        return createCart();
      }
    }
    throw new Error('No active carts');
  }

  const raw: unknown = await response.json();

  const cartData = CartSchema.safeParse(raw);
  if (!cartData.success) {
    throw new Error('Invalid response format');
  }
  return cartData.data;
};
