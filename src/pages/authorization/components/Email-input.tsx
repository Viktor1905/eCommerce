import { ReactElement } from 'react';

export function EmailInput(): ReactElement {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor="email">
        Email
        <span className="text-red-700">*</span>
      </label>
      <input
        name="email"
        type="email"
        className="w-full bg-olive/90 p-3 rounded focus: outline-none focus:border-jungle border-[2px] border-transparent box-border"
        placeholder="Enter your name"
      />
    </div>
  );
}
