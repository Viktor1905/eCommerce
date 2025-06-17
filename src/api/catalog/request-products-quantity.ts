import { getCatalogToken } from './catalog-token.ts';
import { API_CONFIG } from '../login/login.ts';

export async function requestProductsQuantity(): Promise<number> {
  const token: string = await getCatalogToken();
  const url = `https://api.${API_CONFIG.region}.commercetools.com/${API_CONFIG.projectKey}/product-projections?withTotal=true&limit=0`;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      const errorData: unknown = await response.json();
      throw new Error(
        typeof errorData === 'object' &&
        errorData !== null &&
        'message' in errorData &&
        typeof errorData.message === 'string'
          ? errorData.message
          : 'Products request failed'
      );
    }
    const productsResponse: unknown = await response.json();

    if (
      !productsResponse ||
      typeof productsResponse !== 'object' ||
      !('total' in productsResponse) ||
      typeof productsResponse.total !== 'number'
    ) {
      throw new Error('Invalid products response format');
    }
    return productsResponse.total;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw new Error(
      `Product request failed: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}
