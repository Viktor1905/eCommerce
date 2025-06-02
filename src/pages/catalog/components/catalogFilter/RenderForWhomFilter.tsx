import {
  Attribute,
  ProductProjection,
  ProductProjectionResponse,
} from '../../../../api/catalog/products.types.ts';
import { ReactElement } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Filters } from './CatalogFilter.tsx';
import { CustomCheckbox } from './components/CustomCheckbox.tsx';

export function RenderForWhomFilter({ products, register }: FilterProps): ReactElement {
  const forWhom = new Set<string>();
  products?.results.map((item: ProductProjection): void => {
    item.masterVariant.attributes?.forEach((product: Attribute): void => {
      if (
        product.name === 'for' &&
        typeof product.value === 'object' &&
        'key' in product.value &&
        typeof product.value.key === 'string'
      ) {
        if (product.value.key !== 'Anyone') {
          forWhom.add(product.value.key);
        }
      }
    });
  });
  const forWhomSorted: string[] = Array.from(forWhom).sort(
    (product1: string, product2: string): 1 | -1 => {
      return product1 > product2 ? 1 : -1;
    }
  );
  return (
    <div className="border-b border-jungle p-1">
      <h2 className={'text-center'}>For whom:</h2>
      <fieldset>
        {forWhomSorted.map(
          (item: string): ReactElement => (
            <CustomCheckbox
              register={register}
              labelText={item}
              registerValue={'for'}
              value={item}
              key={item}
              inputId={`for-${item}`}
            />
          )
        )}
      </fieldset>
    </div>
  );
}
interface FilterProps {
  products: ProductProjectionResponse | null;
  register: UseFormRegister<Filters>;
}
