export function logoutUser(): void {
  localStorage.removeItem('firstName');
  localStorage.removeItem('refreshToken');
}
