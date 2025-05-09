import { COUNTRIES_DATA } from './countries-data/countries-data';

export default function CountrySelector({ ...props }) {
  return (
    <select
      className="capitalize p-1 bg-khaki h-full rounded-lg text-olive min-w-[300px]"
      id="country"
      defaultValue=""
      {...props}
    >
      <option value="" disabled hidden>
        Select a country
      </option>
      {COUNTRIES_DATA.map((country) => (
        <option
          value={country.code}
          label={country.name}
          key={country.code}
        ></option>
      ))}
    </select>
  );
}
