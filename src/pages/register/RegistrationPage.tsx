import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import RoutingLink from '../../components/RoutingLink/RoutingLink';

export default function RegistrationPage() {
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
