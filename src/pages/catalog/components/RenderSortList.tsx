import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store.ts';
import { CatalogState, setSort } from '../../../store/slice/catalog-slice.ts';

export function RenderSortList() {
  const { sort } = useSelector((s: RootState): CatalogState => s.catalog);
  const dispatch = useDispatch<AppDispatch>();

  const onSortPrice = () => dispatch(setSort(sort === 'price asc' ? 'price desc' : 'price asc'));
  const onSortName = () =>
    dispatch(setSort(sort === 'name.en-Us asc' ? 'name.en-Us desc' : 'name.en-Us asc'));
  const onResetSort = () => dispatch(setSort(undefined));
  const getSortDirection = (field: string) => {
    if (!sort) return null;
    const [currentField, direction] = sort.split(' ');
    return currentField === field ? direction : null;
  };
  const renderArrow = (field: string) => {
    const direction = getSortDirection(field);
    if (!direction) return null;
    return direction === 'asc' ? '↑' : '↓';
  };

  return (
    <div className="absolute top-0 left-12 flex gap-1">
      <button
        type="button"
        onClick={onSortPrice}
        className={
          'relative group cursor-pointer hover:bg-jungle transition-all pl-1 pr-1 rounded hover:text-white text-[15px] ' +
          (sort?.includes('price') ? 'bg-jungle text-white' : '')
        }
      >
        $ <span>{renderArrow('price')}</span>
        {/* Tooltip wrapper */}
        <div className="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
          <div className="bg-white text-gray-700 text-xs p-1 rounded shadow w-max">
            {'sort by price'}
          </div>
        </div>
      </button>
      <button
        type="button"
        onClick={onSortName}
        className={
          'relative group cursor-pointer hover:bg-jungle transition-all pl-1 pr-1 rounded hover:text-white text-[15px] ' +
          (sort?.includes('name.en') ? 'bg-jungle text-white' : '')
        }
      >
        A-Z <span>{renderArrow('name.en-Us')}</span>
        <div className="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
          <div className="bg-white text-gray-700 text-xs p-1 rounded shadow w-max">
            {'sort by name'}
          </div>
        </div>
      </button>
      <button
        type="button"
        onClick={onResetSort}
        className="relative group cursor-pointer hover:bg-jungle transition-all pl-1 pr-1 rounded hover:text-white  text-[15px]"
      >
        ⤾
        <div className="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
          <div className="bg-white text-gray-700 text-xs p-1 rounded shadow w-max">
            {'reset sort'}
          </div>
        </div>
      </button>
    </div>
  );
}
