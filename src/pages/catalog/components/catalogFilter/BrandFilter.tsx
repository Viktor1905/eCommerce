import { ReactElement } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Filters } from './CatalogFilter.tsx';
import { CustomCheckbox } from './components/CustomCheckbox.tsx';

export function BrandFilter({ register }: BrandProps): ReactElement {
  const brands = new Set<string>(['Brit', 'Grandorf', 'No name', 'Orijen', 'Purina']);

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
  register: UseFormRegister<Filters>;
}
