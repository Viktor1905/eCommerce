import { useEffect } from 'react';
import { CategoryBar } from './components/CategoryBar.tsx';
import { CatalogFilter } from './components/CatalogFilter.tsx';
import { CatalogList } from './components/CatalogList.tsx';

export function CatalogPage() {
  useEffect(() => {
    document.title = 'Catalog | Zoo Shop | Pet Supplies';
  }, []);
  return (
    <section className={'w-[90%] m-auto grid grid-cols-5 grid-rows-[auto_1fr] gap-y-4 gap-x-1'}>
      <div className="col-span-5">
        <CategoryBar />
      </div>
      <div className="col-span-1">
        <CatalogFilter />
      </div>
      <div className="col-span-4">
        <CatalogList />
      </div>
    </section>
  );
}
