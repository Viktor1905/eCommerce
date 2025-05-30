import { ReactElement, useEffect, useState } from 'react';
import { ProductProjection } from '../../../api/catalog/products.types.ts';
import { CatalogItem } from './catalog-item/catalog-item.tsx';
import { ProductsQuantity } from './products-quantity.tsx';
import { Pagination } from './pagination.tsx';
import { useSelector } from 'react-redux';
import { CatalogState } from '../slice/catalog-slice.ts';
import { RootState } from '../../../store/store.ts';
import { RenderSortList } from './render-sort-list.tsx';

export function CatalogList(): ReactElement {
  const { products, filteredProducts } = useSelector((s: RootState): CatalogState => s.catalog);
  const [itemsLimit, setItemsLimit] = useState<number>(6);
  const [page, setPage] = useState<number>(1);
  const [pageQuantity, setPageQuantity] = useState<number>(
    products?.results.length ? Math.ceil(products.results.length / itemsLimit) : 1
  );

  const usedProducts = filteredProducts ?? products;
  useEffect((): void => {
    if (usedProducts?.results) {
      setPageQuantity(Math.ceil(usedProducts.results.length / itemsLimit));
    }
  }, [usedProducts, itemsLimit]);
  useEffect((): void => {
    if (page > pageQuantity) {
      setPage(pageQuantity > 1 ? pageQuantity - 1 : 1);
    }
  }, [itemsLimit, page, pageQuantity, products]);

  return (
    <section className={'bg-white h-full flex flex-col '}>
      <RenderSortList />
      <ProductsQuantity
        onChangeLimit={setItemsLimit}
        setPageQuantity={setPageQuantity}
        ProductsLength={products?.results.length ?? 1}
      />
      {!products ? (
        <div className="text-red-500">Just a second please</div>
      ) : usedProducts?.results.length === 0 ? (
        <div className="text-gray-500 text-center py-4">No products found</div>
      ) : (
        <div className="flex flex-wrap sm:grid sm:grid-cols-2  lg:grid-cols-3  gap-3 pr-4 pl-4 pb-2 justify-center">
          {page > 1
            ? usedProducts?.results
                .slice(itemsLimit * (page - 1), itemsLimit * page)
                .map(
                  (item: ProductProjection): ReactElement => (
                    <CatalogItem key={item.id} product={item} />
                  )
                )
            : usedProducts?.results
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
