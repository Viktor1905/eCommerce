import { Control, UseFormRegisterReturn } from 'react-hook-form';
import {
  FieldKey,
  FormFields,
} from '../../pages/register/registration-page-data/registrationSchema';
import { Controller } from 'react-hook-form';
import { format } from 'date-fns';
import { DayPicker, getDefaultClassNames } from 'react-day-picker';
import { useEffect, useRef, useState } from 'react';

type DateInputElementProps = {
  title: string;
  id: FieldKey;
  type: string;
  error?: string;
  register?: UseFormRegisterReturn<FieldKey>;
  control?: Control<FormFields>;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function DateInputElement({
  title,
  id,
  error,
  type,
  register,
  control,
}: DateInputElementProps) {
  const [selected, setSelected] = useState<Date | undefined>(undefined);
  const defaultClassNames = getDefaultClassNames();
  const [open, setOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className={`relative `}>
      <label
        htmlFor={id}
        className={`font-medium text-goldenrod capitalize p-1 font-main flex flex-col`}
      >
        {title}
      </label>
      <input
        {...register}
        name={id}
        type={type}
        id={id}
        value={selected ? format(selected, 'yyyy-MM-dd') : ''}
        readOnly
        className="hidden"
      />
      <Controller
        name={id}
        control={control}
        render={({ field }) => (
          <>
            <div
              className={
                `rounded-lg text-olive font-main ` +
                'p-1 w-[300px] focus:ring-goldenrod focus:outline-none focus:ring-2 bg-khaki'
              }
              onClick={() => {
                setOpen(!open);
              }}
            >
              {selected ? format(selected, 'dd MMMM, yyyy') : 'Pick a date'}
            </div>
            {open && (
              <div
                tabIndex={0}
                ref={pickerRef}
                className="absolute z-10 w-fit h-fit outline-none mt-1 -translate-y-1"
              >
                <DayPicker
                  mode="single"
                  disabled={{ before: new Date(1930, 1, 1), after: new Date() }}
                  selected={selected}
                  onSelect={(day) => {
                    setSelected(day);
                    if (day) {
                      field.onChange(format(day, 'yyyy-MM-dd'));
                      console.log(format(day, 'yyyy-MM-dd'));
                    }
                    setOpen(false);
                  }}
                  onDayBlur={() => {
                    setOpen(!open);
                  }}
                  onDayClick={() => {
                    setOpen(!open);
                  }}
                  captionLayout="dropdown-years"
                  className="text-olive bg-khaki rounded-lg font-main w-[300px]"
                  classNames={{
                    today: `border-goldenrod font-main-bd rounded-full outline-goldenrod`,
                    selected: `bg-goldenrod outline-olive outline-2 font-main-bd text-olive`,
                    root: `${defaultClassNames.root} shadow-xl p-1`,
                    chevron: `${defaultClassNames.chevron} fill-olive`,
                    day: ` w-10 h-10 rounded-full text-center ${defaultClassNames.day}`,
                    disabled: `opacity-50`,
                    day_button: `w-full h-full rounded-full cursor-pointer`,
                    caption_label: 'hidden',
                    years_dropdown: `${defaultClassNames.years_dropdown} bg-khaki outline-0 `,
                    nav: 'absolute left-2',
                    month_caption: `${defaultClassNames.month_caption} flex justify-end pr-2`,
                    month_grid: `${defaultClassNames.month_caption} w-full`,
                  }}
                />
              </div>
            )}
          </>
        )}
      />
      <p
        className={`text-sm text-coral h-5 p-1 break-words whitespace-normal w-[300px]`}
      >
        {error ?? '\u00A0'}
      </p>
    </div>
  );
}
