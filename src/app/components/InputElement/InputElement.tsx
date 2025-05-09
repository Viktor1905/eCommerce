type InputElementProps = {
  title: string;
  id: string;
  type: string;
  placeholder: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function InputElement({
  title,
  id,
  type,
  placeholder,
}: InputElementProps) {
  return (
    <label htmlFor={id} className="flex flex-col capitalize">
      {title}
      <input type={type} id={id} placeholder={placeholder} className="p-1" />
      <p className="text-sm text-red-500 h-5 mt-1 p-1">{'\u00A0'}</p>
    </label>
  );
}
