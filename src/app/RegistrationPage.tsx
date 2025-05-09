import RegistrationForm from './components/RegistrationForm/RegistrationForm';

export default function RegistrationPage() {
  return (
    <>
      <div className="flex gap-4 bg-white items-center p-2 justify-center">
        <span className="text-jungle">Already have an account?</span>
        <a href="#" className="text-jungle m-4">
          Sign in →
        </a>
      </div>
      <RegistrationForm />
    </>
  );
}
