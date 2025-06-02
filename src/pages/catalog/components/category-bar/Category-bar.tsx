import { ReactElement, useCallback, useEffect, useState } from 'react';
import { getProductTypes } from '../../../../api/catalog/request-product-types';
import { Filters } from '../catalogFilter/catalog-filter';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../store/store';
import { setType } from '../../../../store/slice/catalog-slice';

export function CategoryBar({ onFilterSubmit, onResetFilters }: CategoryFilterProps): ReactElement {
  const filters = useSelector((state: RootState) => state.catalog.filters);

  const dispatch = useDispatch<AppDispatch>();
  const [selected, setSelected] = useState<{
    id: string;
    name: string;
    description: string;
  } | null>(null);
  const [productTypes, setProductTypes] = useState<
    { id: string; name: string; description: string }[]
  >([]);

  const handleClick = (item: { id: string; name: string; description: string }) => {
    if (selected && selected.id === item.id) {
      setSelected(null);
      onResetFilters(filters);
      dispatch(setType(''));
    } else {
      setSelected(item);
      onFilterSubmit({
        ...filters,
      });
      dispatch(setType(item.id));
    }
  };

  const fetchProductTypes = useCallback(async () => {
    const rawTypes = await getProductTypes();
    const simplifiedTypes = rawTypes.results.map(({ id, name, description }) => ({
      id,
      name,
      description,
    }));
    setProductTypes(simplifiedTypes);
  }, []);

  useEffect(() => {
    void fetchProductTypes();
  }, [fetchProductTypes, selected]);

  return (
    <section className="flex flex-col gap-2 p-2 pb-0 pl-6 pr-6 ">
      <div className="flex flew-row gap-2">
        <span className=" text-olive">Categories: </span>
        {/* Category buttons */}
        <div className="flex flew-row flex-wrap gap-2">
          {productTypes.map(({ id, name, description }) => (
            <button
              key={id}
              className={`relative group text-nowrap text-olive p-0 pl-2 pr-2 text-sm rounded-full w-fit hover:cursor-pointer ${
                selected?.id === id ? 'bg-blue-200' : 'bg-light-gray'
              }`}
              onClick={() => {
                handleClick({ id, name, description });
              }}
            >
              {name}
              {/* Tooltip wrapper */}
              <div className="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                <div className="bg-white text-gray-700 text-xs p-1 rounded shadow w-max">
                  {description}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500">Catalog{selected ? `  >  ${selected.name}` : ''}</div>
    </section>
  );
}

interface CategoryFilterProps {
  onFilterSubmit: (data: Filters) => void;
  onResetFilters: (data: Filters) => void;
}

/*
https://api.europe-west1.gcp.commercetools.com/ecommerce2v/
product-projections/search
?filter=variants.price.centAmount:range(900%20to%209270)
&filter=productType.id:%2274827b34-8b16-4454-9456-1a9cb46d1b99%22
&filter=variants.attributes.brand:%22Purina%22,%20%22Purina%22

https://api.europe-west1.gcp.commercetools.com/ecommerce2v/product-projections/search
?filter=variants.price.centAmount:range(900%20to%209270)
&filter=productType.id:%2278b324ce-0f28-4b7e-b287-bd88e537929e%22

https://api.europe-west1.gcp.commercetools.com/ecommerce2v/product-projections/search
?filter=variants.price.centAmount:range(900%20to%209270)
&filter=productType.id:%2274827b34-8b16-4454-9456-1a9cb46d1b99%22
&filter=variants.attributes.brand:%22Grandorf%22,%20%22Grandorf%22

https://api.europe-west1.gcp.commercetools.com/ecommerce2v/product-projections/search
?filter=variants.price.centAmount:range(900%20to%209270)
&filter=productType.id:%22518f5128-8f2d-4d7e-9147-b0de1d850890%22
&filter=variants.attributes.brand:%22Grandorf%22,%20%22Grandorf%22

https://api.europe-west1.gcp.commercetools.com/ecommerce2v/product-projections/search
?filter=variants.price.centAmount:range(900%20to%209270
*/
