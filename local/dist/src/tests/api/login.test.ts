import { authenticateUser } from '../../api/login/login.ts';
import { LoginData, LoginResponse } from '../../api/login/login.types.ts';

describe('fetchUser', () => {
  test('response successfully', async () => {
    const user: LoginResponse = await authenticateUser({
      email: 'webdevvva@gmail.com',
      password: 'Test1234',
    });
    expect(user).toHaveProperty('customer');
    expect(user.customer).toHaveProperty('firstName');
    expect(typeof user.customer.firstName).toBe('string');
  });
  test('response error', async () => {
    const wrongUser: LoginData = {
      email: 'webdevvva@gmail.com',
      password: 'Test12345',
    };
    await expect(authenticateUser(wrongUser)).rejects.toThrow(
      'Account with the given credentials not found.'
    );
  });
});
