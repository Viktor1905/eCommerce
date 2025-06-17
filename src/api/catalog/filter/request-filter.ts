import { getCatalogToken } from '../catalog-token.ts';
import { API_CONFIG } from '../../login/login.ts';
import { isProductsResponse } from '../check-response.ts';
import { ProductProjectionResponse } from '../products.types.ts';
export async function requestFilter({
  filters,
  sort,
  type,
  searchTerm,
}: RequestFilterProps): Promise<ProductProjectionResponse> {
  const token: string = await getCatalogToken();
  const queryParts: string[] = [];

  if (searchTerm && searchTerm.trim() !== '') {
    const lang = 'en-US';
    queryParts.push(`text.${lang}=${encodeURIComponent(searchTerm.trim())}`);
  }

  const [min, max] = filters.priceRange;
  queryParts.push(
    `filter=variants.price.centAmount:range(${(min * 100).toString()} to ${(max * 100).toString()})`
  );
  if (type && typeof type === 'string' && type.length > 3) {
    queryParts.push(`filter=productType.id:"${type}"`);
  }
  if (Array.isArray(filters.discounted) && filters.discounted.length > 0) {
    queryParts.push(`filter=variants.attributes.sale:true`);
  }

  const filterParts: string[] = [];
  if (Array.isArray(filters.for) && filters.for.length > 0) {
    filters.for.forEach((key: string): void => {
      filterParts.push(`"${key}"`);
    });
    filterParts.push(`"Anyone"`);
    queryParts.push(`filter=variants.attributes.for.key:${filterParts.join(', ')}`);
  }
  const brandParts: string[] = [];
  if (Array.isArray(filters.brand) && filters.brand.length > 0) {
    filters.brand.forEach((value: string): void => {
      brandParts.push(`"${value}"`);
    });
    queryParts.push(`filter=variants.attributes.brand:${brandParts.join(', ')}`);
  }

  if (sort) {
    queryParts.push(`sort=${sort}`);
  }

  const queryString = queryParts.join('&');
  const url = `https://api.${API_CONFIG.region}.commercetools.com/${API_CONFIG.projectKey}/product-projections/search?${encodeURI(queryString)}`;
  // console.log(url);
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

interface RequestFilterProps {
  filters: RequestFilterParams;
  sort?: string;
  type?: string;
  searchTerm?: string;
}
