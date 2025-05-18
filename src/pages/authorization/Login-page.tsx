import * as React from 'react';
import { LoginForm } from './components/Login-form.tsx';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import RoutingLink from '../../components/RoutingLink/RoutingLink.tsx';

export function LoginPage(): React.ReactElement {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('firstName');
  useEffect(() => {
    if (isAuthenticated) {
      void navigate('/', { replace: true });
    }
  }, [isAuthenticated, navigate]);
  return (
    <section className="w-fit m-auto flex flex-col justify-center items-center rounded-lg bg-white">
      <RoutingLink
        additionalText="Don't have an account?"
        linkText="Sign up →"
        redirectTo="registration"
      />
      <LoginForm />
    </section>
  );
}
