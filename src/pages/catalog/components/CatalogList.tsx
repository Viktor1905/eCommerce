import { ReactElement, useEffect, useState } from 'react';
import {
  ProductProjection,
  ProductProjectionResponse,
} from '../../../api/catalog/products.types.ts';
import { CatalogItem } from './catalogItem/CatalogItem.tsx';
import { ProductsQuantity } from './ProductsQuantity.tsx';
import { Pagination } from './Pagination.tsx';

export function CatalogList({ products }: CatalogListProps): ReactElement {
  const [itemsLimit, setItemsLimit] = useState<number>(6);
  const [page, setPage] = useState<number>(1);
  const [pageQuantity, setPageQuantity] = useState<number>(
    products?.results.length ? Math.ceil(products.results.length / itemsLimit) : 1
  );
  useEffect((): void => {
    if (products?.results) {
      setPageQuantity(Math.ceil(products.results.length / itemsLimit));
    }
  }, [products, itemsLimit]);
  useEffect((): void => {
    if (page > pageQuantity) {
      setPage(pageQuantity > 1 ? pageQuantity - 1 : 1);
    }
  }, [itemsLimit, page, pageQuantity, products]);

  return (
    <section className={'bg-white h-full flex flex-col'}>
      <ProductsQuantity
        onChangeLimit={setItemsLimit}
        setPageQuantity={setPageQuantity}
        ProductsLength={products?.results.length ?? 1}
      />
      {!products ? (
        <div className="text-red-500">Just a second please</div>
      ) : products.results.length === 0 ? (
        <div className="text-gray-500 text-center py-4">No products found</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pr-4 pb-2">
          {page > 1
            ? products.results
                .slice(itemsLimit * (page - 1), itemsLimit * page)
                .map(
                  (item: ProductProjection): ReactElement => (
                    <CatalogItem key={item.id} product={item} />
                  )
                )
            : products.results
                .slice(0, itemsLimit)
                .map(
                  (item: ProductProjection): ReactElement => (
                    <CatalogItem key={item.id} product={item} />
                  )
                )}
        </div>
      )}
      <Pagination onChangePage={setPage} pageQuantity={pageQuantity} currentPage={page} />
    </section>
  );
}

interface CatalogListProps {
  products: ProductProjectionResponse | null;
}
