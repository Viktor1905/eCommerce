import * as React from 'react';
import { LoginForm } from './components/Login-form.tsx';
import './Login-page.css';

export function LoginPage(): React.ReactElement {
  return (
    <section className="w-screen flex justify-center max-w-[1440px]  items-center mw">
      <LoginForm />
    </section>
  );
}
