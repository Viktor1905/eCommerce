import { ReactElement, useEffect, useMemo, useRef, useState } from 'react';
import { CategoryBar } from './components/CategoryBar/CategoryBar.tsx';
import { CatalogFilter, Filters } from './components/catalogFilter/CatalogFilter.tsx';
import { CatalogList } from './components/CatalogList.tsx';
import { RenderFilterBtn } from './components/RenderFilterBtn.tsx';
import { BurgerFilter } from './components/catalogFilter/BurgerFilter.tsx';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store.ts';
import { CatalogState, loadCatalog, setFilters } from '../../store/slice/catalog-slice.ts';

export function CatalogPage(): ReactElement {
  useEffect((): void => {
    document.title = 'Catalog | Zoo Shop | Pet Supplies';
  }, []);
  const dispatch = useDispatch<AppDispatch>();
  const { filters, sort, searchTerm, minCost, maxCost } = useSelector(
    (s: RootState): CatalogState => s.catalog
  );
  const formMethods = useForm<Filters>({
    defaultValues: {
      priceRange: [0, 100],
      brand: [],
      discounted: [],
      for: [],
    },
  });
  const [showBurger, setShowBurger] = useState(false);
  const initialFilterValues = useMemo<Filters>(
    () => ({
      brand: [],
      discounted: [],
      for: [],
      priceRange: [minCost, maxCost],
    }),
    [minCost, maxCost]
  );

  const prevValues = useRef<string | null>(null);

  useEffect(() => {
    const serialized = JSON.stringify(initialFilterValues);

    if (prevValues.current === serialized) return;

    prevValues.current = serialized;

    formMethods.reset(initialFilterValues);
    dispatch(setFilters(initialFilterValues));
  }, [initialFilterValues, formMethods, dispatch]);
  useEffect(() => {
    void dispatch(loadCatalog());
  }, [dispatch, filters, sort, searchTerm]);

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
          'w-[90%] ml-auto mr-auto grid grid-cols-5 grid-rows-[auto_1fr] gap-y-4 gap-x-1 bg-white rounded-2xl items-start'
        }
      >
        <div className="col-span-5">
          <CategoryBar onFilterSubmit={onFilterSubmit} />
        </div>
        <div className="col-span-1 max-[900px]:hidden">
          {!showBurger && (
            <CatalogFilter onFilterSubmit={onFilterSubmit} onResetFilters={onResetFilters} />
          )}
        </div>
        <div className="col-span-4 max-[900px]:col-span-5 relative">
          <button
            type="button"
            className="self-end absolute top-0 left-4 fill-jungle cursor-pointer hover:fill-goldenrod min-[900px]:hidden"
            onClick={onBurgerClick}
          >
            <div className="relative group ">
              <RenderFilterBtn />
              <div className="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                <div className="bg-white text-gray-700 text-xs p-1 rounded shadow w-max">
                  {'filter'}
                </div>
              </div>
            </div>
          </button>
          <CatalogList />
        </div>
        <BurgerFilter
          showBurger={showBurger}
          setShowBurger={setShowBurger}
          onFilterSubmit={onFilterSubmit}
          onResetFilters={onResetFilters}
        />
      </section>
    </FormProvider>
  );
}
