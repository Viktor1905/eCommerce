import { useEffect } from 'react';
import { CategoryBar } from './components/CategoryBar.tsx';
import { CatalogFilter } from './components/CatalogFilter.tsx';
import { CatalogList } from './components/CatalogList.tsx';

export function CatalogPage() {
  useEffect(() => {
    document.title = 'Catalog | Zoo Shop | Pet Supplies';
  }, []);
  return (
    <section className={'w-[80%] m-auto'}>
      <CategoryBar />
      <CatalogFilter />
      <CatalogList />
    </section>
  );
}
