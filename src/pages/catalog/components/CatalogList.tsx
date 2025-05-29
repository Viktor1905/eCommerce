import { ReactElement, useEffect, useState } from 'react';
import {
  ProductProjection,
  ProductProjectionResponse,
} from '../../../api/catalog/products.types.ts';
import { CatalogItem } from './catalogItem/CatalogItem.tsx';
import { ProductsQuantity } from './ProductsQuantity.tsx';
import { Pagination } from './Pagination.tsx';
import { useFormContext } from 'react-hook-form';
import { requestFilter } from '../../../api/catalog/filter/requestFilter.ts';
import { Filters } from './catalogFilter/CatalogFilter.tsx';

export function CatalogList({ products, handleFilter }: CatalogListProps): ReactElement {
  const [itemsLimit, setItemsLimit] = useState<number>(6);
  const [page, setPage] = useState<number>(1);
  const [pageQuantity, setPageQuantity] = useState<number>(
    products?.results.length ? Math.ceil(products.results.length / itemsLimit) : 1
  );
  const [sortPrice, setSortPrice] = useState(false);
  const [sortName, setSortName] = useState(false);
  const { getValues } = useFormContext<Filters>();

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
  const onSortPrice = async (): Promise<void> => {
    if (sortPrice) {
      const result: ProductProjectionResponse = await requestFilter(getValues(), 'price desc');
      handleFilter(result);
    } else {
      void requestFilter(getValues(), 'price asc');
    }
    setSortPrice(!sortPrice);
  };
  const onSortName = async (): Promise<void> => {
    if (sortName) {
      const result: ProductProjectionResponse = await requestFilter(getValues(), 'name.en-Us desc');
      handleFilter(result);
    } else {
      void requestFilter(getValues(), 'name.en-Us asc');
    }
    setSortName(!sortName);
  };
  const onResetSort = async (): Promise<void> => {
    const result: ProductProjectionResponse = await requestFilter(getValues());
    handleFilter(result);
    setSortPrice(false);
    setSortName(false);
  };
  return (
    <section className={'bg-white h-full flex flex-col '}>
      <div>
        <button type="button" onClick={() => void onSortPrice()}>
          Price
        </button>
        <button type="button" onClick={() => void onSortName()}>
          Name
        </button>
        <button type="button" onClick={() => void onResetSort()}>
          Reset
        </button>
      </div>
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
        <div className="flex flex-wrap sm:grid sm:grid-cols-2  lg:grid-cols-3  gap-3 pr-4 pl-4 pb-2 justify-center">
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
  ) as React.ReactElement;
}

interface CatalogListProps {
  products: ProductProjectionResponse | null;
  handleFilter: (result: ProductProjectionResponse) => void;
}
