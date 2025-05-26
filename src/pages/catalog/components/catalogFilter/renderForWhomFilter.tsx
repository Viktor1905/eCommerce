import {
  Attribute,
  ProductProjection,
  ProductProjectionResponse,
} from '../../../../api/catalog/products.types.ts';
import { ReactElement } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Filters } from './CatalogFilter.tsx';

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
        forWhom.add(product.value.key);
      }
    });
  });
  const forWhomSorted: string[] = Array.from(forWhom).sort(
    (product1: string, product2: string): 1 | -1 => {
      return product1 > product2 ? 1 : -1;
    }
  );
  return (
    <div>
      <h2 className={'text-center'}>For whom:</h2>
      <fieldset>
        {forWhomSorted.map(
          (item: string): ReactElement => (
            <div key={item} className="cursor-pointer flex">
              <input
                type="checkbox"
                id={`for-${item}`}
                {...register('for')}
                className="cursor-pointer"
                value={item}
              />
              <label htmlFor={`for-${item}`} className="cursor-pointer w-full block">
                {item}
              </label>
            </div>
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
