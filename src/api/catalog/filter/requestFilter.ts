import { getCatalogToken } from '../catalog-token.ts';
import { API_CONFIG } from '../../login/login.ts';
import { isProductsResponse } from '../check-response.ts';
import { ProductProjectionResponse } from '../products.types.ts';

export async function requestFilter(
  filterParams: RequestFilterParams,
  sortParam?: string
): Promise<ProductProjectionResponse> {
  const token: string = await getCatalogToken();
  const queryParts: string[] = [];

  const [min, max] = filterParams.priceRange;
  queryParts.push(
    `filter=variants.price.centAmount:range(${(min * 100).toString()} to ${(max * 100).toString()})`
  );

  if (Array.isArray(filterParams.discounted) && filterParams.discounted.length > 0) {
    queryParts.push(`filter=variants.scopedPriceDiscounted:true`);
  }

  const filterParts: string[] = [];
  if (Array.isArray(filterParams.for) && filterParams.for.length > 0) {
    filterParams.for.forEach((key: string) => {
      filterParts.push(`"${key}"`);
    });
    filterParts.push(`"Anyone"`);
    queryParts.push(`filter=variants.attributes.for.key:${filterParts.join(', ')}`);
  }
  const brandParts: string[] = [];
  if (Array.isArray(filterParams.brand) && filterParams.brand.length > 0) {
    filterParams.brand.forEach((value: string) => {
      brandParts.push(`"${value}"`);
    });
    queryParts.push(`filter=variants.attributes.brand:${brandParts.join(', ')}`);
  }

  if (sortParam) {
    queryParts.push(`sort=`);
  }
  const queryString = queryParts.join('&');
  const url = `https://api.${API_CONFIG.region}.commercetools.com/${API_CONFIG.projectKey}/product-projections/search?${encodeURI(queryString)}`;
  console.log(url);

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

    console.log(productsResponse);
    return productsResponse;
  } catch (error) {
    throw new Error(
      `Product request failed: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}

interface RequestFilterParams {
  brand: boolean | string[];
  discounted: string[];
  for: boolean | string[];
  priceRange: number[];
}
