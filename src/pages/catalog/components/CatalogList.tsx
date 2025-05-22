import { ReactElement } from 'react';
import {
  ProductProjection,
  ProductProjectionResponse,
} from '../../../api/catalog/products.types.ts';
import { CatalogItem } from './CatalogItem.tsx';

export function CatalogList({ products }: CatalogListProps): ReactElement {
  return (
    <section className={'bg-white h-full'}>
      {!products ? (
        <div className="text-red-500">Just a second please</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pr-1">
          {products.results.map(
            (item: ProductProjection): ReactElement => (
              <CatalogItem key={item.id} product={item} />
            )
          )}
        </div>
      )}
    </section>
  );
}

interface CatalogListProps {
  products: ProductProjectionResponse | null;
}
