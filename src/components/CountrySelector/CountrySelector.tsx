import { UseFormRegisterReturn } from 'react-hook-form';
import { COUNTRIES_DATA } from './countries-data/countries-data';

type CountrySelectorProps = {
  error?: string;
  id: string;
  register?: UseFormRegisterReturn;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function CountrySelector({ error, id, register }: CountrySelectorProps) {
  return (
    <div className={`relative flex flex-wrap w-[300px]`}>
      <label className="p-1 capitalize text-goldenrod font-medium w-[300px] font-main" htmlFor={id}>
        Country
      </label>
      <select
        className="capitalize p-1 bg-khaki rounded-lg text-olive min-w-[300px] inline-block"
        defaultValue=""
        id={id}
        name={id}
        {...register}
      >
        <option value="" disabled hidden>
          Select a country
        </option>
        {COUNTRIES_DATA.map(({ code, name }) => (
          <option value={code} key={code} className="text-olive">
            {name}
          </option>
        ))}
      </select>
      <p className="text-sm text-coral h-5 p-1 w-[300px] break-words whitespace-normal">
        {error ?? '\u00A0'}
      </p>
    </div>
  );
}
