import { ReactElement, useEffect, useState } from 'react';
import { CategoryBar } from './components/CategoryBar/CategoryBar.tsx';
import { CatalogFilter, Filters } from './components/catalogFilter/CatalogFilter.tsx';
import { CatalogList } from './components/CatalogList.tsx';
import { RenderFilterBtn } from './components/RenderFilterBtn.tsx';
import { BurgerFilter } from './components/catalogFilter/BurgerFilter.tsx';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store.ts';
import { CatalogState, loadCatalog, setFilters } from '../../store/slice/catalog-slice.ts';
import { usePrices } from './components/catalogFilter/hooks/usePrices.ts';

export function CatalogPage(): ReactElement {
  useEffect((): void => {
    document.title = 'Catalog | Zoo Shop | Pet Supplies';
  }, []);
  const dispatch = useDispatch<AppDispatch>();
  const { filters, sort, products } = useSelector((s: RootState): CatalogState => s.catalog);
  const { lowestPrice, highestPrice } = usePrices(products);
  const formMethods = useForm<Filters>({
    defaultValues: {
      priceRange: [0, 100],
      brand: [],
      discounted: [],
      for: [],
    },
  });
  const [showBurger, setShowBurger] = useState(false);
  const initialFilterValues: Filters = {
    brand: [],
    discounted: [],
    for: [],
    priceRange: [lowestPrice, highestPrice],
  };

  useEffect(() => {
    void dispatch(loadCatalog());
  }, [filters, sort]);

  useEffect(() => {
    formMethods.reset(initialFilterValues);
    dispatch(setFilters(initialFilterValues));
  }, [lowestPrice, highestPrice]);
  const onFilterSubmit = (data: Filters) => {
    dispatch(setFilters(data));
  };

  const onResetFilters = () => {
    formMethods.reset(initialFilterValues);
    dispatch(setFilters(initialFilterValues));
  };
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
          <CategoryBar onFilterSubmit={onFilterSubmit} />
        </div>
        <div className="col-span-1 max-[900px]:hidden">
          {!showBurger && (
            <CatalogFilter
              products={products}
              onFilterSubmit={onFilterSubmit}
              onResetFilters={onResetFilters}
            />
          )}
        </div>
        <div className="col-span-4 max-[900px]:col-span-5 relative">
          <button
            type="button"
            className="self-end absolute top-0 left-0 fill-jungle cursor-pointer hover:fill-goldenrod min-[900px]:hidden"
            onClick={onBurgerClick}
          >
            <RenderFilterBtn />
          </button>
          <CatalogList />
        </div>
        <BurgerFilter
          showBurger={showBurger}
          setShowBurger={setShowBurger}
          onFilterSubmit={onFilterSubmit}
          onResetFilters={onResetFilters}
          products={products}
        />
      </section>
    </FormProvider>
  );
}
