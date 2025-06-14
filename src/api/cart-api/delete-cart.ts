import { getTokenFromCookie } from '../../pages/profile/ProfilePage';
import { API_URL } from '../sign-up/sign-up';

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

  if (response.ok) {
    return true;
  }
};
