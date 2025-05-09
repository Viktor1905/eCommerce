import { ReactElement, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import eye from './assets/eye.svg';
import eyeOff from './assets/eye-off.svg';

export function PasswordInput({ register, errorMessage }: PasswordInputProps): ReactElement {
  const [passwordType, setPasswordType] = useState(true);
  return (
    <div className="flex flex-col w-full">
      <label htmlFor="password">
        Password
        <span className="text-red-700">*</span>
      </label>
      <div className="relative">
        <input
          {...register}
          className=" w-full bg-olive/90 p-3 rounded focus:outline-none  focus:border-jungle border-[2px] border-transparent box-border font-bold text-xl"
          placeholder="Enter your password"
          type={passwordType ? 'password' : 'text'}
          id="password"
        />
        <div
          className="absolute right-[1%] top-1/2 -translate-y-1/2 cursor-pointer opacity-50"
          onClick={(): void => {
            setPasswordType(!passwordType);
          }}
        >
          <img className="w-[20px]" src={passwordType ? eye : eyeOff} alt="Show password" />
        </div>
      </div>
      <p className="text-sm text-red-500 h-5 mt-1">{errorMessage ?? '\u00A0'}</p>
    </div>
  );
}

interface PasswordInputProps {
  register: UseFormRegisterReturn;
  errorMessage?: string;
}
