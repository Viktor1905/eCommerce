import { ReactElement, useEffect } from 'react';
import { ProductProjection } from '../../../api/catalog/products.types.ts';
import { CatalogItem } from './CatalogItem/CatalogItem.tsx';
import { ProductsQuantity } from './ProductsQuantity.tsx';
import { Pagination } from './Pagination.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { CatalogState, loadCatalog, setPage } from '../../../store/slice/catalog-slice.ts';
import { AppDispatch, RootState } from '../../../store/store.ts';
import { RenderSortList } from './RenderSortList.tsx';

export function CatalogList(): ReactElement {
  const { products, filteredProducts, limit, page, pageQuantity, type } = useSelector(
    (s: RootState): CatalogState => s.catalog
  );
  const dispatch = useDispatch<AppDispatch>();
  const usedProducts = filteredProducts ?? products;
  useEffect((): void => {
    if (page > pageQuantity) {
      dispatch(setPage(pageQuantity > 1 ? pageQuantity - 1 : 1));
    }
    void dispatch(loadCatalog());
  }, [limit, page, pageQuantity, products, type]);

  return (
    <section className={'bg-white h-full flex flex-col rounded-2xl'}>
      <RenderSortList />
      <ProductsQuantity ProductsLength={products?.results.length ?? 1} />
      {!products ? (
        <div className="text-red-500">Just a second please</div>
      ) : usedProducts?.results.length === 0 ? (
        <div className="text-gray-500 text-center py-4">No products found</div>
      ) : (
        <div className="flex flex-wrap sm:grid sm:grid-cols-2  lg:grid-cols-3  gap-3 pr-4 pl-4 pb-2 justify-center">
          {usedProducts?.results.map(
            (item: ProductProjection): ReactElement => <CatalogItem key={item.id} product={item} />
          )}
        </div>
      )}
      <Pagination pageQuantity={pageQuantity} currentPage={page} />
    </section>
  );
}
