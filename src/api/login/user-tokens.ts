import { LoginData } from './login.types.ts';
import { isUserTokenResponse } from './check-response.ts';

export async function getUserTokens(apiConfig: API_CONFIG, data: LoginData): Promise<UsersToken> {
  const authString = `${apiConfig.clientId}:${apiConfig.secretId}`;
  const encodedAuth: string = btoa(authString);
  try {
    const response: Response = await fetch(
      `https://auth.${apiConfig.region}.commercetools.com/oauth/${apiConfig.projectKey}/customers/token`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${encodedAuth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'password',
          username: data.email,
          password: data.password,
          scope: `manage_customers:${apiConfig.projectKey}`,
        }).toString(),
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
    if (!isUserTokenResponse(tokenResponse)) {
      throw new Error('Unknown error occurred during getting token');
    }
    return tokenResponse;
  } catch (error) {
    const errorMessage: string = error instanceof Error ? error.message : 'Unknown error occurred';
    throw new Error(errorMessage);
  }
}
interface API_CONFIG {
  clientId: string;
  secretId: string;
  projectKey: string;
  region: string;
}

export interface UsersToken {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
}
