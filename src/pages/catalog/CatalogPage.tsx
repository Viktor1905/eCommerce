import { useEffect, useState } from 'react';
import { CategoryBar } from './components/CategoryBar.tsx';
import { CatalogFilter } from './components/CatalogFilter.tsx';
import { CatalogList } from './components/CatalogList.tsx';
import { ProductProjectionResponse } from '../../api/catalog/products.types.ts';
import { getProducts } from '../../api/catalog/requestProducts.ts';

export function CatalogPage() {
  useEffect(() => {
    document.title = 'Catalog | Zoo Shop | Pet Supplies';
  }, []);
  const [products, setProducts] = useState<ProductProjectionResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const data = await getProducts();
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
    return () => {
      isMounted = false;
    };
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <section
      className={
        'w-[90%] m-auto grid grid-cols-5 grid-rows-[auto_1fr] gap-y-4 gap-x-1 bg-white rounded'
      }
    >
      <div className="col-span-5">
        <CategoryBar />
      </div>
      <div className="col-span-1">
        <CatalogFilter />
      </div>
      <div className="col-span-4">
        <CatalogList products={products} />
      </div>
    </section>
  );
}
