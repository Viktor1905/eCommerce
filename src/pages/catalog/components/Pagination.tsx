import { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store.ts';
import { setPage } from '../../../store/slice/catalog-slice.ts';

export function Pagination({ pageQuantity, currentPage }: PaginationProps): ReactElement {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <section className="flex justify-center rounded-2xl p-3 gap-1">
      {Array.from({ length: pageQuantity }, (_: unknown, index: number): number => index + 1).map(
        (page: number) => (
          <button
            key={page}
            onClick={(): void => {
              dispatch(setPage(page));
            }}
            className={`px-3 py-1 rounded ${
              currentPage === page ? 'bg-jungle text-white' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {page}
          </button>
        )
      )}
    </section>
  );
}
interface PaginationProps {
  pageQuantity: number;
  currentPage: number;
}
