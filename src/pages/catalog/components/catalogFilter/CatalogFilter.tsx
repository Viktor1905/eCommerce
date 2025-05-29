import { FormEvent, ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { ProductProjectionResponse } from '../../../../api/catalog/products.types.ts';
import { PriceSlider } from './PriceSlider.tsx';
import { BrandFilter } from './BrandFilter.tsx';
import { usePrices } from './hooks/usePrices.ts';
import { requestFilter } from '../../../../api/catalog/filter/requestFilter.ts';
import { RenderForWhomFilter } from './RenderForWhomFilter.tsx';
import { getProducts } from '../../../../api/catalog/requestProducts.ts';
import { GetFilterResetSvg } from './components/getFilterResetSvg.tsx';
import { CustomCheckbox } from './components/CustomCheckbox.tsx';

export function CatalogFilter({
  products,
  onFilter,
  closeWrapper,
}: CatalogFilterProps): ReactElement {
  const { pricesList, lowestPrice, highestPrice } = usePrices(products);
  const { register, handleSubmit, control, reset } = useFormContext<Filters>();

  const onSubmit: (data: Filters) => Promise<void> = async (data: Filters): Promise<void> => {
    try {
      const result: ProductProjectionResponse = await requestFilter(data);
      onFilter(result);
      if (closeWrapper) {
        closeWrapper();
      }
    } catch (error) {
      console.log('Ошибка фильтрации:', error);
    }
  };
  const onReset = async (): Promise<void> => {
    reset({
      priceRange: [lowestPrice, highestPrice],
      discounted: [],
      brand: [],
      for: [],
    });
    try {
      const result = await getProducts();
      onFilter(result);
    } catch (error) {
      console.error('Ошибка фильтрации:', error);
    }
  };
  return (
    <form
      className={'p-3 gap-3 flex flex-col relative'}
      onSubmit={(event: FormEvent<HTMLFormElement>): void => void handleSubmit(onSubmit)(event)}
    >
      <button
        type="button"
        className="self-end absolute top-0 right-0 fill-jungle cursor-pointer hover:fill-goldenrod"
        onClick={(event: React.MouseEvent): void => void handleSubmit(onReset)(event)}
      >
        <GetFilterResetSvg />
      </button>
      <div className="border-b border-jungle p-1">
        <h2 className="text-center">Sale:</h2>
        <fieldset>
          <CustomCheckbox
            register={register}
            labelText={'On sale'}
            value={''}
            registerValue={'discounted'}
            inputId={'sale'}
          />
        </fieldset>
      </div>
      {pricesList.length > 0 && <RenderForWhomFilter products={products} register={register} />}
      {pricesList.length > 0 && <BrandFilter products={products} register={register} />}
      {pricesList.length > 0 && (
        <PriceSlider control={control} lowestPrice={lowestPrice} highestPrice={highestPrice} />
      )}
      <button type="submit" className={'text-nowrap btn-custom !w-[50%] !mb-2'}>
        Submit
      </button>
    </form>
  );
}
export interface Filters {
  brand: string[];
  discounted: string[];
  priceRange: PriceRange;
  for: string[];
}
interface CatalogFilterProps {
  products: ProductProjectionResponse | null;
  onFilter: (products: ProductProjectionResponse) => void;
  closeWrapper?: () => void;
}
type PriceRange = [number, number];
