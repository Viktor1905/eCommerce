import { getCatalogToken } from '../catalog-token.ts';
import { API_CONFIG } from '../../login/login.ts';
import { isProductsResponse } from '../check-response.ts';

export async function requestFilter(params: RequestFilterParams): Promise<void> {
  const token: string = await getCatalogToken();
  const predicates: string[] = [];

  if (Array.isArray(params.for) && params.for.length > 0) {
    const forPredicates: string[] = params.for.map(
      (key: string): string => `masterVariant(attributes(name="for" and value(key="${key}")))`
    );
    forPredicates.push(`masterVariant(attributes(name="for" and value(key="Anyone")))`);
    predicates.push(`(${forPredicates.join(' or ')})`);
  }

  if (Array.isArray(params.brand) && params.brand.length > 0) {
    const brandPredicates: string[] = params.brand.map(
      (value: string): string => `masterVariant(attributes(name="brand" and value="${value}"))`
    );
    predicates.push(`(${brandPredicates.join(' or ')})`);
  }

  if (params.discounted) {
    predicates.push(`masterVariant(prices(discounted is defined))`);
  }

  const [min, max] = params.priceRange;
  const pricePredicate = `(
  masterVariant(prices(discounted(value(centAmount >= ${String(min * 100)} and centAmount <= ${String(max * 100)})))) or 
  masterVariant(prices(discounted is not defined and value(centAmount >= ${String(min * 100)} and centAmount <= ${String(max * 100)})))
)`;
  predicates.push(pricePredicate);
  const finalPredicate: string = predicates.join(' and ');
  const url = `https://api.${API_CONFIG.region}.commercetools.com/${API_CONFIG.projectKey}/product-projections?where=${encodeURI(finalPredicate)}`;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const productsResponse: unknown = await response.json();
    if (!isProductsResponse(productsResponse)) {
      throw new Error('Invalid products response format');
    }
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw new Error(
      `Product request failed: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}

interface RequestFilterParams {
  brand: boolean | string[];
  discounted: boolean;
  for: boolean | string[];
  priceRange: number[];
}
