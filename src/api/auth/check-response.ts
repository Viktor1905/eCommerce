import { LoginResponse } from './login.types.ts';
import { UsersToken } from './user-tokens.ts';

export function isLoginResponse(obj: unknown): obj is LoginResponse {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'customer' in obj &&
    typeof obj.customer === 'object' &&
    obj.customer !== null &&
    'id' in obj.customer &&
    typeof obj.customer.id === 'string' &&
    'email' in obj.customer &&
    typeof obj.customer.email === 'string'
  );
}

export function isUserTokenResponse(obj: unknown): obj is UsersToken {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'access_token' in obj &&
    typeof obj.access_token === 'string' &&
    'expires_in' in obj &&
    typeof obj.expires_in === 'number' &&
    'refresh_token' in obj &&
    typeof obj.refresh_token === 'string' &&
    'scope' in obj &&
    typeof obj.scope === 'string' &&
    'token_type' in obj &&
    typeof obj.token_type === 'string'
  );
}
