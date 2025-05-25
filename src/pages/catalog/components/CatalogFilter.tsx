import { FormEvent, ReactElement } from 'react';
import { useForm } from 'react-hook-form';

export function CatalogFilter(): ReactElement {
  const filterList = ['2 filter', '3 filter', '4 filter'];
  const { register, handleSubmit } = useForm<Filters>();
  const onSubmit = (data: Filters) => {
    console.log(data);
  };
  return (
    <form
      className={'bg-khaki flex flex-col'}
      onSubmit={(event: FormEvent<HTMLFormElement>): void => void handleSubmit(onSubmit)(event)}
    >
      <div>
        <input type="checkbox" id="sale" {...register('discounted')} />
        <label htmlFor="sale">Sale</label>
      </div>
      {filterList.map((item, index) => (
        <button key={index} className={'text-nowrap'}>
          {' '}
          {item}
        </button>
      ))}
      <button type="submit" className={'text-nowrap'}>
        Submit
      </button>
    </form>
  );
}
interface Filters {
  minPrice: number;
  maxPrice: number;
  category: string;
  discounted: boolean;
}
