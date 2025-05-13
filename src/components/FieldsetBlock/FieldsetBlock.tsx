import {
  FieldKey,
  FormFields,
} from '../../pages/register/registration-page-data/registrationSchema';
import CountrySelector from '../CountrySelector/CountrySelector';
import InputElement from '../InputElement/InputElement';
import { FieldErrors, useForm } from 'react-hook-form';

interface FieldsetBlockProps {
  title: string;
  content: {
    id: FieldKey;
    title: string;
    type: string;
  }[];
  register: ReturnType<typeof useForm<FormFields>>['register'];
  errors: FieldErrors<FormFields>;
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
      <legend className="text-2xl capitalize text-goldenrod p-2 font-medium text-center font-main">
        {title}
        {hint && <p className="text-base text-goldenrod">{hint}</p>}
      </legend>

      {content.map((property) => (
        <InputElement
          key={property.id}
          title={property.title}
          id={property.id}
          type={property.type}
          register={register(property.id)}
          error={errors[property.id]?.message}
        />
      ))}

      {title.includes('address') && (
        <CountrySelector
          id={(title.split(' ')[0] + 'Country') as FieldKey}
          register={register((title.split(' ')[0] + 'Country') as FieldKey)}
          error={errors[(title.split(' ')[0] + 'Country') as FieldKey]?.message}
        />
      )}
    </fieldset>
  );
}
