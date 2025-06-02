import { ReactElement, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

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
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer "
            onClick={(): void => {
              setShowPassword((prev) => !prev);
            }}
          >
            {showPassword ? '🙉' : '🙈'}
          </button>
        )}
      </div>
      <p className="text-sm h-fit font-main-bd text-red-500 h-5 mt-1">{errorMessage ?? '\u00A0'}</p>
    </div>
  );
}

export interface LoginInputProps {
  register: UseFormRegisterReturn;
  errorMessage?: string;
  type: 'email' | 'password' | 'text';
  label: string;
  placeholder: string;
  required?: boolean;
}
