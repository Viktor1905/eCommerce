import { ReactElement, useEffect, useState } from 'react';
import { CategoryBar } from './components/catalogBar/CategoryBar.tsx';
import { CatalogFilter, Filters } from './components/catalogFilter/CatalogFilter.tsx';
import { CatalogList } from './components/CatalogList.tsx';
import { ProductProjectionResponse } from '../../api/catalog/products.types.ts';
import { getProducts } from '../../api/catalog/requestProducts.ts';
import { RenderFilterBtn } from './components/RenderFilterBtn.tsx';
import { BurgerFilter } from './components/catalogFilter/BurgerFilter.tsx';
import { FormProvider, useForm } from 'react-hook-form';
import { usePrices } from './components/catalogFilter/hooks/usePrices.ts';

export function CatalogPage(): ReactElement {
  useEffect((): void => {
    document.title = 'Catalog | Zoo Shop | Pet Supplies';
  }, []);
  const [products, setProducts] = useState<ProductProjectionResponse | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<ProductProjectionResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [showBurger, setShowBurger] = useState(false);
  const formMethods = useForm<Filters>();

  const handleFilter = (result: ProductProjectionResponse): void => {
    setFilteredProducts(result);
  };
  const { lowestPrice, highestPrice } = usePrices(products);
  useEffect((): void => {
    if (lowestPrice && highestPrice) {
      formMethods.reset({
        priceRange: [lowestPrice, highestPrice],
        discounted: [''],
        brand: [],
        for: [],
      });
    }
  }, [lowestPrice, highestPrice]);
  useEffect((): (() => void) => {
    let isMounted = true;
    const fetchData: () => Promise<void> = async (): Promise<void> => {
      try {
        const data: ProductProjectionResponse = await getProducts();
        if (isMounted) {
          setProducts(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error('Fetch error'));
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };
    void fetchData();
    return (): void => {
      isMounted = false;
    };
  }, []);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  const onBurgerClick = (): void => {
    setShowBurger(!showBurger);
  };

  return (
    <FormProvider {...formMethods}>
      <section
        className={
          'w-[90%] m-auto grid grid-cols-5 grid-rows-[auto_1fr] gap-y-4 gap-x-1 bg-white rounded  '
        }
      >
        <div className="col-span-5">
          <CategoryBar />
        </div>
        <div className="col-span-1 max-[900px]:hidden">
          {!showBurger && <CatalogFilter products={products} onFilter={handleFilter} />}
        </div>
        <div className="col-span-4 max-[900px]:col-span-5 relative">
          <button
            type="button"
            className="self-end absolute top-0 left-0 fill-jungle cursor-pointer hover:fill-goldenrod min-[900px]:hidden"
            onClick={onBurgerClick}
          >
            <RenderFilterBtn />
          </button>
          <CatalogList products={filteredProducts ?? products} handleFilter={handleFilter} />
        </div>
        <BurgerFilter
          showBurger={showBurger}
          setShowBurger={setShowBurger}
          handleFilter={handleFilter}
          products={products}
        />
      </section>
    </FormProvider>
  );
}
