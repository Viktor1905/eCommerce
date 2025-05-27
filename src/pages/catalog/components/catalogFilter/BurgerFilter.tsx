import { ReactElement, useEffect } from 'react';
import { ProductProjectionResponse } from '../../../../api/catalog/products.types.ts';
import { CatalogFilter } from './CatalogFilter.tsx';

export function BurgerFilter({
  showBurger,
  setShowBurger,
  handleFilter,
  products,
}: BurgerProps): ReactElement {
  useEffect(() => {
    if (showBurger) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [showBurger]);
  const closeWrapper = (): void => {
    setShowBurger(!showBurger);
  };
  return (
    <section
      className={`fixed z-5 w-screen h-screen bg-black/40 top-0 left-0 flex justify-center content-center overflow-auto transition-opacity duration-300 ${
        showBurger ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="w-[350px] bg-white h-fit mt-5 pt-10 pr-5 pl-5 relative">
        <div
          className="absolute top-1 right-3 cursor-pointer text-red-700 hover:text-jungle"
          onClick={closeWrapper}
        >
          X
        </div>
        <CatalogFilter products={products} onFilter={handleFilter} closeWrapper={closeWrapper} />
      </div>
    </section>
  );
}

interface BurgerProps {
  showBurger: boolean;
  setShowBurger: (showBurger: boolean) => void;
  handleFilter: (result: ProductProjectionResponse) => void;
  products: ProductProjectionResponse | null;
}
