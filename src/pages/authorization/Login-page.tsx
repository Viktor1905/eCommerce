import * as React from 'react';
import { LoginForm } from './components/Login-form.tsx';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function LoginPage(): React.ReactElement {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('firstName');
  useEffect(() => {
    if (isAuthenticated) {
      void navigate('/', { replace: true });
    }
  }, [isAuthenticated, navigate]);
  return (
    <section className="w-screen flex justify-center max-w-[1440px] m-auto items-center mw">
      <LoginForm />
    </section>
  );
}
