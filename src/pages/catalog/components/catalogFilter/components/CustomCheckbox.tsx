import { Path, UseFormRegister } from 'react-hook-form';
import { Filters } from '../CatalogFilter.tsx';

export function CustomCheckbox({
  register,
  labelText,
  value,
  registerValue,
  inputId,
}: CheckboxProps) {
  return (
    <label htmlFor={inputId} className="flex justify-between items-center cursor-pointer gap-2">
      <h2 className="block">{labelText}</h2>
      <div className="relative inline-block w-[2em] h-[1.3em]">
        <input
          type="checkbox"
          id={inputId}
          {...register(registerValue)}
          className="sr-only peer"
          value={value}
        />
        <div className="absolute top-0 left-0 w-full h-full rounded-full bg-khaki/30 shadow-[inset_0_0_5px_rgba(0,0,0,0.3)] transition-colors" />
        <div
          className="
          absolute w-[1em] h-[1em] rounded-full bg-[#e84d4d]
          top-[0.2em] left-[0.2em] transition-all duration-200 transform rotate-[90deg]
          peer-checked:left-[0.8em] peer-checked:bg-jungle peer-checked:shadow-[-2px_0_5px_rgba(0,0,0,0.2)]
          peer-checked:rotate-[295deg]
        "
        />
      </div>
    </label>
  );
}
interface CheckboxProps {
  register: UseFormRegister<Filters>;
  labelText: string;
  registerValue: Path<Filters>;
  value: string;
  inputId: string;
}
