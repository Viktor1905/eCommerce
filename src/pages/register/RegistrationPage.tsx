import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import RoutingLink from '../../components/RoutingLink/RoutingLink';
import { useEffect } from 'react';

export default function RegistrationPage() {
  useEffect(() => {
    document.title = 'Sing Up | Zoo Shop | Pet Supplies';
  }, []);
  return (
    <>
      <RoutingLink additionalText="Already have an account?" linkText="Sign in →" />
      <RegistrationForm />
    </>
  );
}
