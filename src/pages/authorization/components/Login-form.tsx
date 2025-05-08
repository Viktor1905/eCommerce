import * as React from 'react';
import { EmailInput } from './Email-input.tsx';
import { PasswordInput } from './Password-input.tsx';

export function LoginForm(): React.ReactElement {
  return (
    <form className="flex flex-col  p-[40px] w-[35%] font-main rounded-[20px] text-xl gap-6 !text-goldenrod border">
      <h1 className="font-additional self-center text-3xl font-bold"> Login </h1>
      <EmailInput />
      <PasswordInput />
      <button
        type="submit"
        className="w-[100%] !border-[2px] !bg-goldenrod text-white hover:!bg-jungle hover:!border-goldenrod  disabled:!cursor-not-allowed disabled:opacity-50 disabled:hover:!bg-goldenrod disabled:hover:text-white focus:!border-jungle focus:!outline-0"
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
