import { registrationPageData } from './registration-page-data/registration-page-data';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registrationSchema } from './registration-page-data/registrationSchema';
import FieldsetBlock from './components/FieldsetBlock/FieldsetBlock';

export default function RegistrationPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = void handleSubmit((data) => {
    console.log(data);
  });

  return (
    <section className="bg-white flex flex-col items-center justify-center">
      <h2 className="text-3xl p-2 text-center text-[var(--color-jungle)] font-medium">
        Registration
      </h2>
      <form
        className="flex flex-col gap-2 p-2 items-center"
        onSubmit={onSubmit}
      >
        {registrationPageData.map((registrationFieldset) => (
          <FieldsetBlock
            title={registrationFieldset.title}
            content={registrationFieldset.content}
            hint={registrationFieldset.hint}
            register={register}
            errors={errors}
            key={registrationFieldset.title
              .toLocaleLowerCase()
              .split(' ')
              .join('-')}
          />
        ))}
        <input
          type="submit"
          className="w-fit p-1 pl-3 pr-3 text-white bg-[var(--color-jungle)] rounded-xl m-2 text-2xl capitalize font-medium"
        />
      </form>
    </section>
  );
}
