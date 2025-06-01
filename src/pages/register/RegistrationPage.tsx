import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import RoutingLink from '../../components/RoutingLink/RoutingLink';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTokenFromCookie } from '../profile/ProfilePage';

export default function RegistrationPage() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = getTokenFromCookie();
    if (token) {
      void navigate('/', { replace: true });
      return;
    }
  }, [navigate]);
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
