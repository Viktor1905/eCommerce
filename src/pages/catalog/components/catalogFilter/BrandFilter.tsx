import { ReactElement } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Filters } from './CatalogFilter.tsx';
import {
  Attribute,
  ProductProjection,
  ProductProjectionResponse,
} from '../../../../api/catalog/products.types.ts';

export function BrandFilter({ products, register }: BrandProps): ReactElement {
  const brands = new Set<string>();
  products?.results.map((item: ProductProjection): void => {
    item.masterVariant.attributes?.forEach((product: Attribute): void => {
      if (product.name === 'brand' && typeof product.value === 'string') {
        brands.add(product.value);
      }
    });
  });
  const brandsSorted: string[] = Array.from(brands).sort(
    (product1: string, product2: string): 1 | -1 => {
      return product1 > product2 ? 1 : -1;
    }
  );
  return (
    <div>
      <h2 className={'text-center'}>Brand:</h2>
      <fieldset>
        {brandsSorted.map(
          (item: string): ReactElement => (
            <div key={item} className="cursor-pointer flex">
              <input
                type="checkbox"
                id={`brand-${item}`}
                {...register('brand')}
                className="cursor-pointer"
                value={item}
              />
              <label htmlFor={`brand-${item}`} className="cursor-pointer w-full block">
                {item}
              </label>
            </div>
          )
        )}
      </fieldset>
    </div>
  );
}

interface BrandProps {
  products: ProductProjectionResponse | null;
  register: UseFormRegister<Filters>;
}
