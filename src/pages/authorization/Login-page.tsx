import * as React from 'react';

export function LoginPage(): React.ReactElement {
  return (
    <section className="w-screen flex justify-center items-center">
      <form className="bg-goldenrod  flex flex-col items-center p-[40px] w-[40%] font-main rounded-[20px] h-fit gap-6 ">
        <h1 className="font-additional text-xl"> Login </h1>
        <div className="flex flex-col  w-full">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            className="w-full bg-white p-2 rounded"
            placeholder="Enter your name"
          ></input>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            className="w-full bg-white p-2 rounded"
            placeholder="Enter your password"
            type="password"
          ></input>
        </div>
        <button type="submit">Login</button>
        <div>
          <p>Don`t have an account?</p>
          <a href="/registration">Sign Up!</a>
        </div>
      </form>
    </section>
  );
}
