import * as React from 'react';
import { LoginForm } from './components/Login-form.tsx';
import './Login-page.css';
import { useEffect } from 'react';

export function LoginPage(): React.ReactElement {
  useEffect(() => {
    document.title = 'Log In | Zoo Shop | Pet Supplies';
  }, []);
  return (
    <section className="w-screen flex justify-center max-w-[1440px]  items-center mw">
      <LoginForm />
    </section>
  );
}
