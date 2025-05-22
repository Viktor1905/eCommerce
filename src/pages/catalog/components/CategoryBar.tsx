import { ReactElement } from 'react';

export function CategoryBar(): ReactElement {
  const categoryList = ["bed's for cats", "bed's for dogs", 'eat for cats', 'eat for dogs'];
  return (
    <section className={'flex, gap-2 pl-10 pr-10'}>
      <span>Categories: </span>
      {categoryList.map((item, index) => (
        <button key={index} className={'text-nowrap'}>
          {' '}
          {item}
        </button>
      ))}
    </section>
  );
}
