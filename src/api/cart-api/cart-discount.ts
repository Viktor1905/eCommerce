import { getTokenFromCookie } from '../../pages/profile/ProfilePage';
import { API_URL } from '../sign-up/sign-up';
import { CartSchema } from './cart-types';
import { getLastActiveCart } from './get-cart';

export async function applyDiscount(code: string) {
  const token = getTokenFromCookie();
  if (!token) throw new Error('Invalid or expired token');
  const activeCart = await getLastActiveCart();

  try {
    const body = {
      version: activeCart.version,
      actions: [
        {
          action: 'addDiscountCode',
          code: code,
        },
      ],
    };
    const response = await fetch(`${API_URL}/carts/${activeCart.id}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Failed to apply discount`);
    }
    const raw: unknown = await response.json();
    const cartData = CartSchema.safeParse(raw);
    if (!cartData.success) {
      throw new Error('Invalid response format');
    }
    return cartData.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
