import { FormEvent, ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { PriceSlider } from './PriceSlider.tsx';
import { BrandFilter } from './BrandFilter.tsx';
import { RenderForWhomFilter } from './RenderForWhomFilter.tsx';
import { GetFilterResetSvg } from './components/FilterResetSvg.tsx';
import { CustomCheckbox } from './components/CustomCheckbox.tsx';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { CatalogState } from '../../../../store/slice/catalog-slice';

export function CatalogFilter({
  onFilterSubmit,
  onResetFilters,
  closeWrapper,
}: CatalogFilterProps): ReactElement {
  const { register, handleSubmit, control } = useFormContext<Filters>();
  const { minCost, maxCost } = useSelector((s: RootState): CatalogState => s.catalog);
  const onSubmit: (data: Filters) => void = (data: Filters): void => {
    try {
      onFilterSubmit(data);
      if (closeWrapper) {
        closeWrapper();
      }
    } catch (error) {
      console.log('Ошибка фильтрации:', error);
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
        onClick={(event: React.MouseEvent): void => void handleSubmit(onResetFilters)(event)}
      >
        <GetFilterResetSvg />
      </button>
      <div className="border-b border-jungle p-1">
        <h2 className="text-center">Sale:</h2>
        <fieldset>
          <CustomCheckbox
            register={register}
            labelText={'On sale'}
            value={'sale'}
            registerValue={'discounted'}
            inputId={'sale'}
          />
        </fieldset>
      </div>
      {<RenderForWhomFilter register={register} />}
      {<BrandFilter register={register} />}
      {<PriceSlider control={control} lowestPrice={minCost} highestPrice={maxCost} />}
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
  onFilterSubmit: (data: Filters) => void;
  onResetFilters: (data: Filters) => void;
  closeWrapper?: () => void;
}
type PriceRange = number[];
