import * as React from 'react';
import { EmailInput } from './Email-input.tsx';
import { PasswordInput } from './password-input/Password-input.tsx';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export function LoginForm(): React.ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginInputs>({
    mode: 'onChange',
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form
      className="flex flex-col  p-[40px] w-[35%] font-main rounded-[20px] text-xl gap-6 !text-goldenrod border"
      onSubmit={(event) => void handleSubmit(onSubmit)(event)}
    >
      <h1 className="font-additional self-center text-3xl font-bold"> Login </h1>
      <EmailInput register={register('email')} errorMessage={errors.email?.message} />
      <PasswordInput register={register('password')} errorMessage={errors.password?.message} />
      <button
        type="submit"
        className="w-[100%] !border-[2px] !bg-goldenrod text-white hover:!bg-jungle hover:!border-goldenrod  disabled:!cursor-not-allowed disabled:opacity-50 disabled:hover:!bg-goldenrod disabled:hover:text-white focus:!border-jungle focus:!outline-0"
        disabled={!isValid}
      >
        Login
      </button>
      <div>
        <p>Don`t have an account?</p>
        <a href="/registration" className="!text-olive hover:!text-jungle ">
          Sign Up!
        </a>
      </div>
    </form>
  );
}

export interface LoginInputs {
  email: string;
  password: string;
}

const schema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .refine((val: string): boolean => val.includes('@'), {
      message: "Email address must contain an '@' symbol separating local part and domain name.",
    })
    .refine((val: string): boolean => val.trim() === val, {
      message: 'Email address must not contain leading or trailing whitespace.',
    })
    .refine(
      (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email),
      'Email must contain a domain name (e.g., example.com)'
    ),
  password: z
    .string()
    .regex(/\d+/gi, { message: 'Password must contain at least one digit' })
    .regex(/[A-ZА-Я]/, { message: 'Password must contain at least one uppercase letter' })
    .regex(/[a-zа-я]/, { message: 'Password must contain at least one lowercase letter' })
    .min(8, { message: 'Password must be longer than 8 characters' })
    .refine((val: string): boolean => !/\s/.test(val), {
      message: 'Password must not contain spaces',
    }),
});

type FormData = z.infer<typeof schema>;
