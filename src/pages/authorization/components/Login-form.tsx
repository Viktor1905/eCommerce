import * as React from 'react';
import { LoginInput } from './Login-input.tsx';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from './login-scheme.tsx';
import { authenticateUser } from '../../../api/login/login.ts';
import { LoginResponse } from '../../../api/login/login.types.ts';
import { FormEvent } from 'react';

export function LoginForm(): React.ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm<LoginInputs>({
    mode: 'onChange',
    resolver: zodResolver(schema),
  });
  const onSubmit: (data: LoginInputs) => Promise<void> = async (
    data: LoginInputs
  ): Promise<void> => {
    try {
      const response: LoginResponse = await authenticateUser(data);
      if ('customer' in response) {
        console.log('User logged in:', response.customer);
      } else {
        setError('root', {
          type: 'manual',
          message: 'Invalid email or password',
        });
      }
    } catch (error) {
      const errorMessage: string = error instanceof Error ? error.message : 'Something went wrong';
      setError('root', {
        type: 'manual',
        message: errorMessage,
      });
    }
  };
  return (
    <section className="w-[35%] p-[10px] font-main rounded-[20px] text-xl min-w-[300px] !text-goldenrod max-[400px]:p-[3px], max-[400px]:min-w-[250px]">
      <form
        className="flex flex-col gap-6"
        onSubmit={(event: FormEvent<HTMLFormElement>): void => {
          event.preventDefault();
          void handleSubmit(onSubmit)(event);
        }}
      >
        <h1 className="font-additional self-center text-3xl font-bold"> Login </h1>
        <LoginInput
          register={register('email')}
          errorMessage={errors.email?.message}
          type="text"
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
          className="w-[100%] m-auto !border-[2px] rounded-lg border-goldenrod !bg-goldenrod text-white hover:!bg-goldenrod/70 hover:!border-goldenrod  disabled:!cursor-not-allowed disabled:opacity-50 disabled:hover:!bg-goldenrod disabled:hover:text-white focus:!border-olive focus:!outline-0"
          disabled={!isValid}
        >
          Login
        </button>
      </form>
      {errors.root && <p className="text-red-500 text-xl mt-2">{errors.root.message}</p>}
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
