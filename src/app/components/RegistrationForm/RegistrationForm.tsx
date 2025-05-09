import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  FormValues,
  registrationSchema,
} from '../../registration-page-data/registrationSchema';
import FieldsetBlock from '../FieldsetBlock/FieldsetBlock';
import { registrationPageData } from '../../registration-page-data/registration-page-data';

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registrationSchema),
  });

  const handleValidSubmit = (data: FormValues) => {
    console.log(data);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void handleSubmit(handleValidSubmit)(event);
  };

  return (
    <section className="bg-white flex flex-col items-center justify-center font-additional ">
      <h2 className="text-3xl p-2 text-center text-jungle font-main font-semibold">
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
          className="w-fit p-1 pl-3 pr-3 text-white bg-jungle rounded-xl m-2 text-2xl capitalize font-main font-medium"
        />
      </form>
    </section>
  );
}
