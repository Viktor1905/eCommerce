import { FormEvent, ReactElement, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ProductProjectionResponse } from '../../../../api/catalog/products.types.ts';
import { PriceSlider } from './PriceSlider.tsx';

export function CatalogFilter({ products }: CatalogFilterProps): ReactElement {
  const pricesList: number[] =
    products?.results.map((item) => {
      const priceObj = item.masterVariant.prices[0];
      return priceObj.discounted?.value.centAmount
        ? priceObj.discounted.value.centAmount / 100
        : priceObj.value.centAmount / 100;
    }) ?? [];

  const lowestPrice: number = Math.min(...pricesList);
  const highestPrice: number = Math.max(...pricesList);

  const { register, handleSubmit, control, setValue } = useForm<Filters>({
    defaultValues: {
      priceRange: [lowestPrice, highestPrice],
    },
  });
  useEffect((): void => {
    setValue('priceRange', [lowestPrice, highestPrice]);
  }, [lowestPrice, highestPrice, setValue]);
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
      {pricesList.length > 0 && (
        <PriceSlider control={control} lowestPrice={lowestPrice} highestPrice={highestPrice} />
      )}
      <button type="submit" className={'text-nowrap'}>
        Submit
      </button>
    </form>
  );
}
export interface Filters {
  minPrice: number;
  maxPrice: number;
  category: string;
  discounted: boolean;
  priceRange: PriceRange;
}
interface CatalogFilterProps {
  products: ProductProjectionResponse | null;
}
type PriceRange = [number, number];
