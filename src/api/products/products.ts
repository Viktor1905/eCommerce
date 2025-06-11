import { API_CONFIG } from '../login/login';
import {
  ApiErrorSchema,
  AuthTokenResponseSchema,
  AuthTokenResponse,
  ProductProjection,
  ProductProjectionSchema,
} from './types/schemas';

// import { fetchCartDetails } from '../../api/cart/auth';

export async function checkStatus(response: Response): Promise<void> {
  if (!response.ok) {
    const rawData: unknown = await response.json();
    const result = ApiErrorSchema.safeParse(rawData);
    if (!result.success) {
      throw new Error('API returned unexpected error format');
    }
    const errorBody = result.data;
    throw new Error(`Request failed (${errorBody.statusCode.toString()}): ${errorBody.message}`);
  }
}

export async function fetchProductDetails(id: string): Promise<ProductProjection> {
  try {
    const dataAuthResponse = await getClientCredentialsToken();

    const responseProduct: Response = await fetch(
      `https://api.${API_CONFIG.region}.commercetools.com/${API_CONFIG.projectKey}/product-projections/${id}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${dataAuthResponse.access_token}`,
        },
      }
    );

    await checkStatus(responseProduct);
    const rawData: unknown = await responseProduct.json();
    const result = ProductProjectionSchema.safeParse(rawData);

    if (!result.success) {
      throw new Error('API returned unexpected error format');
    }

    // fetchCartDetails();
    return result.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Request error: ${error.name}, ${error.message}`);
    }
    throw new Error(String(error));
  }
}

export async function getClientCredentialsToken(): Promise<AuthTokenResponse> {
  const authString = `${API_CONFIG.clientId}:${API_CONFIG.secretId}`;
  const encodedAuth: string = btoa(authString);

  const response: Response = await fetch(
    `https://auth.${API_CONFIG.region}.commercetools.com/oauth/${API_CONFIG.projectKey}/anonymous/token`,
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${encodedAuth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=client_credentials&scope=view_published_products:${API_CONFIG.projectKey}`,
    }
  );

  await checkStatus(response);
  const rawData: unknown = await response.json();
  const result = AuthTokenResponseSchema.safeParse(rawData);
  if (!result.success) {
    throw new Error('Invalid auth token format');
  }
  return result.data;
}
