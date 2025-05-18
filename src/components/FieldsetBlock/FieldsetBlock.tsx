import {
  FieldKey,
  FormFields,
} from '../../pages/register/registration-page-data/registrationSchema';
import CountrySelector from '../CountrySelector/CountrySelector';
import DateInputElement from '../DateInputElement/DateInputElement';
import InputElement from '../InputElement/InputElement';
import { Control, FieldErrors, useForm } from 'react-hook-form';

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
  control?: Control<FormFields>;
}

export default function FieldsetBlock({
  title,
  content,
  register,
  errors,
  hint,
  control,
}: FieldsetBlockProps) {
  return (
    <fieldset className="flex flex-row gap-4 p-2 flex-wrap justify-center">
      <legend className="text-2xl capitalize text-goldenrod p-2 font-medium text-center font-main">
        {title}
        {hint && <p className="text-base text-goldenrod">{hint}</p>}
      </legend>

      {content.map((property) => {
        const isDateField = property.id.toLowerCase().includes('date');

        return isDateField ? (
          <DateInputElement
            key={property.id}
            title={property.title}
            error={errors[property.id]?.message}
            id={property.id}
            type={property.type}
            control={control}
            register={register(property.id)}
          />
        ) : (
          <InputElement
            key={property.id}
            title={property.title}
            id={property.id}
            type={property.type}
            register={register(property.id)}
            error={errors[property.id]?.message}
          />
        );
      })}

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
