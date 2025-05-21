import { Control, FieldErrors, Path, UseFormRegister } from 'react-hook-form';
import CountrySelector from '../CountrySelector/CountrySelector';
import DateInputElement from '../DateInputElement/DateInputElement';
import InputElement from '../InputElement/InputElement';

interface FieldDescriptor<TFieldName extends Path<TFieldValues>, TFieldValues> {
  required?: boolean;
  id: TFieldName;
  title: string;
  type: string;
}

interface FieldsetBlockProps<TFieldValues extends Record<string, unknown>> {
  title: string;
  content: FieldDescriptor<Path<TFieldValues>, TFieldValues>[];
  register: UseFormRegister<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
  hint?: string;
  control?: Control<TFieldValues>;
}

export default function FieldsetBlock<TFieldValues extends Record<string, unknown>>({
  title,
  content,
  register,
  errors,
  hint,
  control,
}: FieldsetBlockProps<TFieldValues>) {
  return (
    <fieldset className="flex flex-row gap-4 p-2 flex-wrap justify-center">
      <legend className="text-2xl capitalize text-goldenrod p-2 font-medium text-center font-main">
        {title}
        {hint && <p className="text-base text-goldenrod">{hint}</p>}
      </legend>

      {content.map((property) => {
        const id = property.id;
        const isDateField = String(id).toLowerCase().includes('date');

        return isDateField ? (
          <DateInputElement
            key={String(id)}
            title={property.title}
            error={errors[id]?.message as string | undefined}
            id={id}
            type={property.type}
            control={control}
            register={register(id)}
            required={property.required}
          />
        ) : (
          <InputElement
            key={String(id)}
            title={property.title}
            id={String(id)}
            type={property.type}
            register={register(id)}
            error={errors[id]?.message as string | undefined}
            required={property.required}
          />
        );
      })}

      {title.includes('address') && (
        <CountrySelector
          id={`${title.split(' ')[0]}Country`}
          register={register(`${title.split(' ')[0]}Country` as Path<TFieldValues>)}
          error={errors[`${title.split(' ')[0]}Country` as Path<TFieldValues>]?.message as string}
          required={true}
        />
      )}
    </fieldset>
  );
}
