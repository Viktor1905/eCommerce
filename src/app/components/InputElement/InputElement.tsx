import CountrySelector from '../CountrySelector/CountrySelector';

type InputElementProps = {
  title: string;
  id: string;
  type: string;
  placeholder: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function InputElement({
  title,
  id,
  type,
  placeholder,
  error,
  ...props
}: InputElementProps) {
  const isSelect = type === 'select';
  return (
    <label
      htmlFor={id}
      className="flex flex-col capitalize text-[var(--color-goldenrod)] font-medium w-[300px]"
    >
      {title}
      {isSelect ? (
        <CountrySelector {...props} />
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className="p-1 bg-[var(--color-khaki)] rounded-lg text-[var(--color-olive)] ps-2"
          {...props}
        />
      )}

      <p className="text-sm text-[var(--color-coral)] h-5 p-1 w-[300px] break-words whitespace-normal">
        {error ?? '\u00A0'}
      </p>
    </label>
  );
}
