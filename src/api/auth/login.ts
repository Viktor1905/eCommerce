import { LoginData, LoginResponse } from './login.types.ts';
import { isLoginResponse } from './check-response.ts';
import { getAuthToken } from './auth-token.ts';
import { getUserTokens, UsersToken } from './user-tokens.ts';

const API_CONFIG = {
  clientId: 'QMdMW3dn2QFBIFpoFRm_yfE0',
  secretId: 'CV6y3lEHvhTtkY4a-8wFxZ9d4hVzfIOw',
  projectKey: 'ecommerce2v',
  region: 'europe-west1.gcp',
};

export async function loginUser(data: LoginData): Promise<LoginResponse> {
  const token = await getAuthToken();
  if (!token) {
    throw new Error('Failed to get auth token');
  }

  try {
    const response: Response = await fetch(
      `https://api.${API_CONFIG.region}.commercetools.com/${API_CONFIG.projectKey}/login`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      const errorData: unknown = await response.json();
      throw new Error(
        typeof errorData === 'object' &&
        errorData !== null &&
        'message' in errorData &&
        typeof errorData.message === 'string'
          ? errorData.message
          : 'Login failed'
      );
    }

    const loginResponse: unknown = await response.json();
    if (!isLoginResponse(loginResponse)) {
      throw new Error('Invalid login response format');
    }
    const usersToken: UsersToken = await getUserTokens(API_CONFIG, data);
    localStorage.setItem('userName', loginResponse.customer.firstName);
    localStorage.setItem('refreshToken', usersToken.refresh_token);
    return loginResponse;
  } catch (error) {
    const errorMessage: string = error instanceof Error ? error.message : 'Unknown error occurred';
    throw new Error(errorMessage);
  }
}
