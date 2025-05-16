export async function getAuthToken(): Promise<string | null> {
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
        body: `grant_type=client_credentials&scope=manage_customers:${API_CONFIG.projectKey}`,
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
    console.log(tokenResponse);
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
const API_CONFIG = {
  clientId: 'QMdMW3dn2QFBIFpoFRm_yfE0',
  secretId: 'CV6y3lEHvhTtkY4a-8wFxZ9d4hVzfIOw',
  projectKey: 'ecommerce2v',
  region: 'europe-west1.gcp',
};
