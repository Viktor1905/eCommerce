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
    <section className="w-[35%] p-[10px] font-main rounded-[20px] text-xl min-w-[300px] !text-goldenrod max-[400px]:p-[3px], max-[400px]:min-w-[250px]">
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
          required={true}
        />
        <LoginInput
          register={register('password')}
          errorMessage={errors.password?.message}
          type="password"
          label="Password"
          placeholder="Enter you password"
          required={true}
        />
        <button
          type="submit"
          className="w-[100%] !border-[2px] !bg-goldenrod text-white hover:!bg-goldenrod/70 hover:!border-goldenrod  disabled:!cursor-not-allowed disabled:opacity-50 disabled:hover:!bg-goldenrod disabled:hover:text-white focus:!border-olive focus:!outline-0"
          disabled={!isValid}
        >
          Login
        </button>
      </form>
      <div>
        <p>Don&#39;t have an account?</p>
        <a className="!text-olive hover:!text-goldenrod cursor-pointer">Sign Up!</a>
      </div>
    </section>
  );
}

export interface LoginInputs {
  email: string;
  password: string;
}

type FormData = z.infer<typeof schema>;
