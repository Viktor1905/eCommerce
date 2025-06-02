import { Control, FieldErrors, Path, UseFormRegister } from 'react-hook-form';
import CountrySelector from '../CountrySelector/CountrySelector';
import DateInputElement from '../DateInputElement/DateInputElement';
import InputElement from '../InputElement/InputElement';

export interface FieldDescriptor<TFieldName extends Path<TFieldValues>, TFieldValues> {
  required?: boolean;
  id: TFieldName;
  title: string;
  type: string;
  value?: string;
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
        const { id, type, title, required, value } = property;
        const error = errors[id]?.message as string | undefined;

        if (type === 'country') {
          return (
            <CountrySelector
              key={id}
              id={id}
              register={register(id)}
              error={error}
              required={required}
            />
          );
        }

        const isDateField = String(id).toLowerCase().includes('date');

        return isDateField ? (
          <DateInputElement
            key={id}
            title={title}
            error={error}
            id={id}
            type={type}
            control={control}
            register={register(id)}
            required={required}
            value={value}
          />
        ) : (
          <InputElement
            value={value}
            key={id}
            title={title}
            id={id}
            type={type}
            register={register(id)}
            error={error}
            required={required}
          />
        );
      })}
    </fieldset>
  );
}
