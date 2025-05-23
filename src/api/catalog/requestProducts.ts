import { API_CONFIG } from '../login/login.ts';
import { getCatalogToken } from './catalog-token.ts';
import { isProductsResponse } from './check-response.ts';
import { ProductProjectionResponse } from './products.types.ts';

export async function getProducts(): Promise<ProductProjectionResponse> {
  const token: string = await getCatalogToken();
  const url = `https://api.${API_CONFIG.region}.commercetools.com/${API_CONFIG.projectKey}/product-projections`;
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
    if (!isProductsResponse(productsResponse)) {
      throw new Error('Invalid products response format');
    }
    return productsResponse;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw new Error(
      `Product request failed: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}
