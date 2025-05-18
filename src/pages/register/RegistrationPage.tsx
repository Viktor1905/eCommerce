import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import RoutingLink from '../../components/RoutingLink/RoutingLink';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegistrationPage() {
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
        additionalText="Already have an account?"
        linkText="Sign in →"
        redirectTo="login"
      />
      <RegistrationForm />
    </section>
  );
}
