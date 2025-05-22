import { ReactElement } from 'react';

export function CategoryBar(): ReactElement {
  const categoryList = ["bed's for cats", "bed's for dogs", 'eat for cats', 'eat for dogs'];
  return (
    <section className={'flex, gap-2'}>
      <div className={'flex gap-2'}>
        <span>Categories: </span>
        {categoryList.map((item, index) => (
          <button key={index}> {item}</button>
        ))}
      </div>
    </section>
  );
}
