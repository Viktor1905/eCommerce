import { LoginResponse } from './login.types.ts';

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
