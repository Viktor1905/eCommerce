import { ReactElement, useEffect, useState } from 'react';
import { getProducts } from '../../../api/catalog/requestProducts.ts';
import { ProductProjectionResponse } from '../../../api/catalog/products.types.ts';

export function CatalogList(): ReactElement {
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
    <section className={'bg-white h-full'}>
      {products && <div>{/* Здесь можно рендерить список продуктов */}</div>}
    </section>
  );
}
