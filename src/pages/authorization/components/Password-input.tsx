import { ReactElement } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export function PasswordInput({ register, errorMessage }: PasswordInputProps): ReactElement {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor="password">
        Password
        <span className="text-red-700">*</span>
      </label>
      <input
        {...register}
        className="w-full bg-olive/90 p-3 rounded focus:outline-none  focus:border-jungle border-[2px] border-transparent box-border font-bold text-xl"
        placeholder="Enter your password"
        type="password"
      />
      <p className="text-sm text-red-500 h-5 mt-1">{errorMessage ?? '\u00A0'}</p>
    </div>
  );
}

interface PasswordInputProps {
  register: UseFormRegisterReturn;
  errorMessage?: string;
}
