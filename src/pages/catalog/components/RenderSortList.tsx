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
    <div className="absolute top-0 left-10 flex gap-1">
      <button
        type="button"
        onClick={onSortPrice}
        className=" cursor-pointer hover:bg-jungle transition-all pl-1 pr-1 rounded hover:text-white text-[15px]"
      >
        $ <span>{renderArrow('price')}</span>
      </button>
      <button
        type="button"
        onClick={onSortName}
        className="cursor-pointer hover:bg-jungle transition-all pl-1 pr-1 rounded hover:text-white text-[15px]"
      >
        A-Z <span>{renderArrow('name.en-Us')}</span>
      </button>
      <button
        type="button"
        onClick={onResetSort}
        className="cursor-pointer hover:bg-jungle transition-all pl-1 pr-1 rounded hover:text-white  text-[15px]"
      >
        ⤾
      </button>
    </div>
  );
}
