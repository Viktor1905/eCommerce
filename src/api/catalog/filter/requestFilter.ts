// import { getCatalogToken } from '../catalog-token.ts';
// import { API_CONFIG } from '../../login/login.ts';
//
// export async function requestFilter(params?: string): Promise<void> {
//   const token: string = await getCatalogToken();
//   const predicate =encodeURI('masterVariant(prices(discounted is defined))');
//   const url = `https://api.${API_CONFIG.region}.commercetools.com/${API_CONFIG.projectKey}/product-projections?where=${predicate}`;
//   try {
//     const response = await fetch(url, {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json',
//       },
//     })
//     console.log(await response.json());
//   }
//   catch (error ) {
//     console.log(error);
//   }
// }
