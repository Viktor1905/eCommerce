import { ReactElement } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Filters } from './CatalogFilter.tsx';
import {
  Attribute,
  ProductProjection,
  ProductProjectionResponse,
} from '../../../../api/catalog/products.types.ts';
import { CustomCheckbox } from './components/CustomCheckbox.tsx';

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
    <div className="border-b border-jungle p-1">
      <h2 className={'text-center'}>Brand:</h2>
      <fieldset>
        {brandsSorted.map(
          (item: string): ReactElement => (
            <CustomCheckbox
              register={register}
              labelText={item}
              registerValue={'brand'}
              value={item}
              key={item}
              inputId={`brand-${item}`}
            />
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
