// import { API_CONFIG } from '../login/login';
// import Cookies from 'js-cookie';

// export async function fetchCartDetails(): Promise<void> {
//   const token = Cookies.get('access_token');
// console.log('fetch')
//   if (!token) {
//     console.log('access_token: not found');
//     return;
//   }

//   try {
//     const responseCart: Response = await fetch(
//       `https://api.${API_CONFIG.region}.commercetools.com/${API_CONFIG.projectKey}/me/active-cart`,
//       {
//         method: 'GET',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     if (!responseCart.ok) console.log('Cart not found');

//     console.log(responseCart.json());
//   } catch (error) {
//     if (error instanceof Error) {
//       throw new Error(`Request error: ${error.name}, ${error.message}`);
//     }
//     throw new Error(String(error));
//   }
// }
