import { FormValues } from '../../registration-page-data/registrationSchema';
import InputElement from '../InputElement/InputElement';
import { FieldErrors, useForm } from 'react-hook-form';

interface FieldsetBlockProps {
  title: string;
  content: {
    id: keyof FormValues;
    title: string;
    placeholder: string;
    type: string;
  }[];
  register: ReturnType<typeof useForm<FormValues>>['register'];
  errors: FieldErrors<FormValues>;
  hint?: string;
}

export default function FieldsetBlock({
  title,
  content,
  register,
  errors,
  hint,
}: FieldsetBlockProps) {
  return (
    <fieldset className="flex flex-row gap-4 p-2 flex-wrap justify-center">
      <legend className="text-2xl capitalize text-jungle p-2 font-medium text-center font-main">
        {title}
        {hint ? <p className="text-base text-goldenrod">{hint}</p> : null}
      </legend>

      {content.map((property) => (
        <InputElement
          key={property.id}
          title={property.title}
          placeholder={property.placeholder}
          id={property.id}
          type={property.type}
          {...register(property.id)}
          error={errors[property.id]?.message}
        />
      ))}
    </fieldset>
  );
}
