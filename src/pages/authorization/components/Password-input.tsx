import { ReactElement } from 'react';

export function PasswordInput(): ReactElement {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor="password">
        Password
        <span className="text-red-700">*</span>
      </label>
      <input
        name="password"
        className="w-full bg-olive/90 p-3 rounded focus:outline-none  focus:border-jungle border-[2px] border-transparent box-border font-bold text-xl"
        placeholder="Enter your password"
        type="password"
      />
    </div>
  );
}
