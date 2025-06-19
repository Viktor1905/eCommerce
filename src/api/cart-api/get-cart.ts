import { getTokenFromCookie } from '../../pages/profile/ProfilePage';
import { getAnonymsTokenFromCookie } from '../../pages/profile/ProfilePage';
import { API_URL } from '../sign-up/sign-up';
import { CartSchema } from './cart-types';
import { createCart } from './create-cart';
import { ErrorPayloadSchema } from '../../api/products/types/schemas';
import { API_CONFIG } from '../login/login.ts';
import { AuthTokenResponseSchema } from '../products/types/schemas';

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
  let token = getTokenFromCookie();
  token ??= getAnonymsTokenFromCookie();
  if (!token) throw new Error('Invalid or expired token');

  try {
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
          const newCart = await createCart();
          return newCart;
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
  } catch (error) {
    console.error('An error occurred in getLastActiveCart:', error);
    throw error;
  }
};

export const getAnonymousCart = async () => {
  const token = getAnonymsTokenFromCookie();
  if (token) return;

  const authString = `${API_CONFIG.clientId}:${API_CONFIG.secretId}`;
  const encodedAuth = btoa(authString);

  try {
    const response = await fetch(
      `https://auth.${API_CONFIG.region}.commercetools.com/oauth/${API_CONFIG.projectKey}/anonymous/token`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${encodedAuth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'client_credentials',
          scope: `manage_my_orders:${API_CONFIG.projectKey}`,
        }).toString(),
      }
    );

    if (!response.ok) {
      throw new Error('No token anonyms');
    }
    const raw: unknown = await response.json();
    const result = AuthTokenResponseSchema.safeParse(raw);

    if (!result.success) {
      console.error('Zod validation failed:', result.error.issues);
      throw new Error('Invalid token format from server.');
    }
    const anonymous_token = result.data.access_token;
    document.cookie = `anonymous_access_token=${anonymous_token}; path=/; max-age=3600; secure; samesite=strict`;

    const cartResponse = await fetch(`${API_URL}/me/carts`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${anonymous_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        currency: 'USD',
      }),
    });

    if (!cartResponse.ok) {
      throw new Error('Failed to create cart with anonymous token');
    }

    const cartJson: unknown = await cartResponse.json();
    const cartResult = CartSchema.safeParse(cartJson);

    if (!cartResult.success) {
      console.error('Invalid cart format on creation:', cartResult.error.issues);
      throw new Error('Received cart has invalid format');
    }
  } catch (error) {
    console.error('Failed during cart creation:', error);
    throw error;
  }
};
