import { ReactElement } from 'react';

export function Pagination({
  onChangePage,
  pageQuantity,
  currentPage,
}: PaginationProps): ReactElement {
  return (
    <section className="flex justify-center p-3 gap-1">
      {Array.from({ length: pageQuantity }, (_: unknown, index: number): number => index + 1).map(
        (page: number) => (
          <button
            key={page}
            onClick={(): void => {
              onChangePage(page);
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
  onChangePage: (page: number) => void;
  pageQuantity: number;
  currentPage: number;
}
