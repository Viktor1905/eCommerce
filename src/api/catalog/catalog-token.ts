import { API_CONFIG } from '../login/login.ts';

export async function getCatalogToken() {
  const authString = `${API_CONFIG.clientId}:${API_CONFIG.secretId}`;
  const encodedAuth: string = btoa(authString);
  try {
    const response: Response = await fetch(
      `https://auth.${API_CONFIG.region}.commercetools.com/oauth/token`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${encodedAuth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `grant_type=client_credentials&scope=view_published_products:${API_CONFIG.projectKey}`,
      }
    );
    if (!response.ok) {
      const errorData: unknown = await response.json().catch(() => ({}));
      throw new Error(
        typeof errorData === 'object' &&
        errorData !== null &&
        'message' in errorData &&
        typeof errorData.message === 'string'
          ? errorData.message
          : 'Login failed'
      );
    }
    const tokenResponse: unknown = await response.json();
    if (
      !tokenResponse ||
      !(typeof tokenResponse === 'object') ||
      !('access_token' in tokenResponse) ||
      !(typeof tokenResponse.access_token === 'string')
    ) {
      throw new Error('Unknown error occurred during getting token');
    }
    return tokenResponse.access_token;
  } catch (error) {
    const errorMessage: string = error instanceof Error ? error.message : 'Unknown error occurred';
    throw new Error(errorMessage);
  }
}
