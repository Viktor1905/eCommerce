import * as React from 'react';
import { LoginForm } from './components/Login-form.tsx';

export function LoginPage(): React.ReactElement {
  return (
    <section className="w-screen flex justify-center max-w-[1440px] m-auto items-center mw">
      <LoginForm />
    </section>
  );
}
