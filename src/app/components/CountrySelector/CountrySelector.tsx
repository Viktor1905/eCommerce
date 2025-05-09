import { useState } from 'react';
import { COUNTRIES_DATA } from './countries-data/countries-data';

export default function CountrySelector({}) {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState('\u00A0');

  function handleBlur() {
    setTouched(true);
    if (!value) {
      setError('Please select a country');
    }
  }
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setValue(e.target.value);
    if (touched && e.target.value !== '') {
      setError('\u00A0');
    }
  }

  return (
    <label htmlFor="country" className="flex flex-col capitalize ">
      Country
      <select
        className="capitalize "
        id="country"
        defaultValue=""
        onChange={handleChange}
        onBlur={handleBlur}
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
      <p className="text-sm text-red-500 h-5 mt-1 p-1">{error}</p>
    </label>
  );
}
