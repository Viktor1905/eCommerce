export async function getAuthToken(ApiConfig: API_CONFIG): Promise<string | null> {
  const authString = `${ApiConfig.clientId}:${ApiConfig.secretId}`;
  const encodedAuth: string = btoa(authString);
  try {
    const response: Response = await fetch(
      `https://auth.${ApiConfig.region}.commercetools.com/oauth/token`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${encodedAuth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `grant_type=client_credentials&scope=manage_customers:${ApiConfig.projectKey}`,
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
    console.log('Token fetch error:', error);
    return null;
  }
}
interface API_CONFIG {
  clientId: string;
  secretId: string;
  projectKey: string;
  region: string;
}
