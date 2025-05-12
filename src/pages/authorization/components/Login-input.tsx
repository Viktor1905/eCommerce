import { ReactElement, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import eye from './assets/eye.svg';
import eyeOff from './assets/eye-off.svg';

export function LoginInput({
  register,
  errorMessage,
  type,
  label,
  placeholder,
  required,
}: LoginInputProps): ReactElement {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;
  const id = type;
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={id}>
        {label}
        <span className="text-red-700">*</span>
      </label>
      <div className="relative">
        <input
          {...register}
          id={id}
          className="w-full bg-khaki p-3 rounded focus:outline-none text-olive focus:border-goldenrod border-[2px] border-transparent box-border font-bold text-xl"
          placeholder={placeholder}
          type={inputType}
          required={required ?? undefined}
          autoComplete={type}
        />
        {isPassword && (
          <div
            className="absolute right-[1%] top-1/2 -translate-y-1/2 cursor-pointer opacity-50"
            onClick={(): void => {
              setShowPassword((prev) => !prev);
            }}
          >
            <img
              className="w-[20px]"
              src={showPassword ? eyeOff : eye}
              alt="Toggle password visibility"
            />
          </div>
        )}
      </div>
      <p className="text-sm h-fit font-main-bd text-red-500 h-5 mt-1">{errorMessage ?? '\u00A0'}</p>
    </div>
  );
}

interface LoginInputProps {
  register: UseFormRegisterReturn;
  errorMessage?: string;
  type: 'email' | 'password';
  label: string;
  placeholder: string;
  required?: boolean;
}
