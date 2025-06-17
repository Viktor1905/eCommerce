import { getCatalogToken } from './catalog-token';
import { API_CONFIG } from '../login/login';
import { ProductProjection } from './products.types';
import { isProductsResponse } from './check-response';

export async function getMaxCost(): Promise<ProductProjection> {
  const token: string = await getCatalogToken();
  const url = `https://api.${API_CONFIG.region}.commercetools.com/${API_CONFIG.projectKey}/product-projections/search?sort=price desc&limit=1`;
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
      throw new Error('Invalid min cost request format');
    }
    return productsResponse.results[0];
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw new Error(
      `Product request failed: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}
export async function defineMaxCost(): Promise<number> {
  const product = await getMaxCost();
  const priceObj = product.masterVariant.prices[0];
  return priceObj.discounted?.value.centAmount
    ? priceObj.discounted.value.centAmount / 100
    : priceObj.value.centAmount / 100;
}
