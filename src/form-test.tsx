import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface Inputs {
  example: string;
  exampleRequired: string;
}

const schema = z.object({
  example: z.string().min(1, { message: 'Example is required' }),
  exampleRequired: z.string().min(1, { message: 'This field is required' }),
});

type FormData = z.infer<typeof schema>;

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  console.log(watch('example')); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    /* void to prevent Eslint error: Promise-returning function provided to attribute where a void return was expected */
    <form
      className="flex flex-col gap-1 w-full"
      onSubmit={(event) => void handleSubmit(onSubmit)(event)}
    >
      <div className="flex flex-col ">
        <input
          defaultValue="input-test"
          {...register('example')}
          className="border rounded px-2 py-1"
        />
        <p className="text-sm text-red-500 h-5 mt-1">{errors.example?.message ?? '\u00A0'}</p>
      </div>

      {/* include validation with required or other standard HTML validation rules */}
      <div className="flex flex-col">
        <input
          placeholder="Required field"
          {...register('exampleRequired')}
          className="border rounded px-2 py-1"
        />
        {/* errors will return when field validation fails  */}
        <p className="text-sm text-red-500 h-5 mt-1">
          {errors.exampleRequired?.message ?? '\u00A0'}
        </p>
      </div>

      <input type="submit" />
    </form>
  );
}
