import { getClientCredentialsToken } from '../../api/products/products';
import { API_CONFIG } from '../login/login';
import { ApiErrorSchema } from '../../api/products/types/schemas';

export async function fetchProductsByQuery(query: string): Promise<unknown> {
  const token = await getClientCredentialsToken();
  const lang = 'en-US';

  try {
    const url = new URL(
      `https://api.${API_CONFIG.region}.commercetools.com/${API_CONFIG.projectKey}/product-projections/search`
    );

    url.searchParams.append(`text.${lang}`, query);
    url.searchParams.append('limit', '30');
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token.access_token}`,
      },
    });

    if (!response.ok) {
      const rawData: unknown = await response.json();
      const result = ApiErrorSchema.safeParse(rawData);
      if (!result.success) {
        throw new Error('API returned unexpected error format');
      }
      const errorBody = result.data;
      throw new Error(`Request failed (${errorBody.statusCode.toString()}): ${errorBody.message}`);
    }

    const searchResult: unknown = await response.json();
    console.log(searchResult);
    return searchResult;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Request error: ${error.name}, ${error.message}`);
    }
    throw new Error(String(error));
  }
}
