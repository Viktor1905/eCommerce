import { ReactElement } from 'react';

export function CatalogFilter(): ReactElement {
  const filterList = ['1 filter', '2 filter', '3 filter', '4 filter'];
  return (
    <section className={'bg-khaki flex flex-col'}>
      {filterList.map((item, index) => (
        <button key={index} className={'text-nowrap'}>
          {' '}
          {item}
        </button>
      ))}
    </section>
  );
}
