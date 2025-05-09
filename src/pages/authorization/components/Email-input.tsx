import { ReactElement } from 'react';

import { UseFormRegisterReturn } from 'react-hook-form';

export function EmailInput({ register, errorMessage }: EmailInputProps): ReactElement {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor="email">
        E-mail
        <span className="text-red-700">*</span>
      </label>
      <input
        {...register}
        id="email"
        className="w-full bg-olive/90 p-3 rounded focus: outline-none focus:border-jungle border-[2px] border-transparent box-border"
        placeholder="Enter your e-mail"
      />
      <p className="text-sm text-red-500 h-5 mt-1">{errorMessage ?? '\u00A0'}</p>
    </div>
  );
}

interface EmailInputProps {
  register: UseFormRegisterReturn;
  errorMessage?: string;
}
