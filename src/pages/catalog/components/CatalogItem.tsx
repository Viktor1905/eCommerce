import { ReactElement } from 'react';
import { ProductProjection } from '../../../api/catalog/products.types.ts';

export function CatalogItem({ product }: ProductListProps): ReactElement {
  return (
    <div key={product.id} className="border rounded-lg p-4 hover:shadow-md">
      <h3 className="font-semibold text-lg">{product.name['en-US'] ?? 'Unnamed Product'}</h3>
      {product.masterVariant.images?.[0] && (
        <img
          src={product.masterVariant.images[0].url}
          alt={product.name['en-US'] ?? 'Product image'}
          className="mt-2 w-full h-48 object-contain"
        />
      )}
      <p className="mt-2 text-gray-600">
        {product.description ? product.description['en-US'] : 'No description available'}
      </p>
    </div>
  );
}
interface ProductListProps {
  product: ProductProjection;
}
