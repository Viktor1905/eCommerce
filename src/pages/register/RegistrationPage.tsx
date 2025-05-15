import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import RoutingLink from '../../components/RoutingLink/RoutingLink';

export default function RegistrationPage() {
  return (
    <>
      <RoutingLink
        additionalText="Already have an account?"
        linkText="Sign in →"
      />
      <RegistrationForm />
    </>
  );
}
