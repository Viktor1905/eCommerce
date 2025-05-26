import { FormEvent, ReactElement, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ProductProjectionResponse } from '../../../../api/catalog/products.types.ts';
import { PriceSlider } from './PriceSlider.tsx';
import { BrandFilter } from './BrandFilter.tsx';
import { usePrices } from './hooks/usePrices.ts';
import { requestFilter } from '../../../../api/catalog/filter/requestFilter.ts';
import { RenderForWhomFilter } from './RenderForWhomFilter.tsx';
import { getProducts } from '../../../../api/catalog/requestProducts.ts';

export function CatalogFilter({ products }: CatalogFilterProps): ReactElement {
  const { pricesList, lowestPrice, highestPrice } = usePrices(products);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isDirty },
  } = useForm<Filters>({
    defaultValues: {
      priceRange: [lowestPrice, highestPrice],
    },
  });
  useEffect((): void => {
    if (lowestPrice && highestPrice) {
      reset({
        priceRange: [lowestPrice, highestPrice],
        discounted: false,
        brand: [],
        for: [],
      });
    }
  }, [lowestPrice, highestPrice, reset]);
  const onSubmit: (data: Filters) => void = (data: Filters): void => {
    void (isDirty ? requestFilter(data) : getProducts());
  };
  return (
    <form
      className={'bg-khaki flex flex-col'}
      onSubmit={(event: FormEvent<HTMLFormElement>): void => void handleSubmit(onSubmit)(event)}
    >
      <div>
        <input type="checkbox" id="sale" {...register('discounted')} />
        <label htmlFor="sale"> On sale</label>
      </div>
      {pricesList.length > 0 && <RenderForWhomFilter products={products} register={register} />}
      {pricesList.length > 0 && <BrandFilter products={products} register={register} />}
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
  brand: string[];
  discounted: boolean;
  priceRange: PriceRange;
  for: string[];
}
interface CatalogFilterProps {
  products: ProductProjectionResponse | null;
}
type PriceRange = [number, number];
