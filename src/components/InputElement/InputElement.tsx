import { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type InputElementProps<TFieldName extends string> = {
  title: string;
  id: string;
  type: string;
  error?: string;
  register?: UseFormRegisterReturn<TFieldName>;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function InputElement<TFieldName extends string>({
  title,
  id,
  type,
  error,
  register,
  required,
}: InputElementProps<TFieldName>) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const isCheckbox = type === 'checkbox';
  const isEmail = type === 'email';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;
  return (
    <div className={`relative ${isCheckbox ? 'flex flex-col items-center ' : 'flex flex-col'}`}>
      <div className={isCheckbox ? 'flex flex-row-reverse w-fit ' : 'flex flex-col'}>
        <label
          htmlFor={id}
          className={`font-medium text-goldenrod capitalize p-1 font-main ${
            isCheckbox ? 'w-fit' : ''
          }`}
        >
          {required && <span className="text-red-700">* </span>}
          {title}
        </label>

        <input
          type={inputType}
          id={id}
          placeholder="Start typing..."
          className={
            `rounded-lg text-olive font-main ` +
            `` +
            (isCheckbox
              ? 'w-fit m-1 p-2 cursor-pointer accent-goldenrod mx-1 hover:accent-goldenrod'
              : 'p-1 w-[300px] focus:ring-goldenrod focus:outline-none focus:ring-2 bg-khaki')
          }
          {...register}
          name={id}
          autoComplete={isEmail ? 'on' : 'off'}
        />
      </div>

      {isPassword && (
        <button
          type="button"
          className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer pt-3"
          onClick={() => {
            setShowPassword((prev) => !prev);
          }}
          aria-label={showPassword ? 'Hide' : 'Show'}
        >
          {showPassword ? '🙉' : '🙈'}
        </button>
      )}
      {!isCheckbox && (
        <p className={`text-sm text-coral h-5 p-1 break-words whitespace-normal w-[300px]`}>
          {error ?? '\u00A0'}
        </p>
      )}
    </div>
  );
}
