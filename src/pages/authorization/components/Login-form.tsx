import * as React from 'react';
import { LoginInput } from './Login-input.tsx';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from './login-scheme.tsx';

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
    <section className="w-[35%] p-[40px] font-main rounded-[20px] text-xl  !text-goldenrod border">
      <form
        className="flex flex-col gap-6"
        onSubmit={(event) => void handleSubmit(onSubmit)(event)}
      >
        <h1 className="font-additional self-center text-3xl font-bold"> Login </h1>
        <LoginInput
          register={register('email')}
          errorMessage={errors.email?.message}
          type="email"
          label="Email"
          placeholder="Enter you email"
        />
        <LoginInput
          register={register('password')}
          errorMessage={errors.password?.message}
          type="password"
          label="Password"
          placeholder="Enter you password"
        />
        <button
          type="submit"
          className="w-[100%] !border-[2px] !bg-goldenrod text-white hover:!bg-jungle hover:!border-goldenrod  disabled:!cursor-not-allowed disabled:opacity-50 disabled:hover:!bg-goldenrod disabled:hover:text-white focus:!border-jungle focus:!outline-0"
          disabled={!isValid}
        >
          Login
        </button>
      </form>
      <div>
        <p>Don`t have an account?</p>
        <a href="/registration" className="!text-olive hover:!text-jungle ">
          Sign Up!
        </a>
      </div>
    </section>
  );
}

export interface LoginInputs {
  email: string;
  password: string;
}

type FormData = z.infer<typeof schema>;
