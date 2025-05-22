import { ReactElement } from 'react';
import { Attribute, ProductProjection } from '../../../api/catalog/products.types.ts';
import saleIcon from './assets/sale.svg';

export function CatalogItem({ product }: ProductListProps): ReactElement {
  const description = product.masterVariant.attributes?.find((obj: Attribute): boolean => {
    return obj.name === 'small-description';
  });
  const isDiscount: number | false =
    product.masterVariant.prices[product.masterVariant.prices.length - 1]?.discounted?.value
      .centAmount ?? false;
  const discountPrice: number | false = isDiscount ? isDiscount / 100 : false;
  const price: number =
    product.masterVariant.prices[product.masterVariant.prices.length - 1]?.value.centAmount / 100;
  return (
    <div
      key={product.id}
      className="rounded-lg p-2 bg-white hover:shadow-md font-main cursor-pointer hover:border-0 hover:max-h-[800px] hover:scale-105 transition-all max-h-[500px] "
    >
      {product.masterVariant.images?.[0] && (
        <div className={'relative'}>
          <img
            src={product.masterVariant.images[0].url}
            alt={product.name['en-US'] ?? 'Product image'}
            className="mt-2 w-full h-48 object-contain"
          />
          {discountPrice && (
            <img
              src={saleIcon}
              className={'w-[2em] absolute top-0 left-0 scale-x-100'}
              alt={'sale'}
            />
          )}
        </div>
      )}
      <h3 className="font-semibold text-lg font-main-bd">
        {product.name['en-US'] ?? 'Unnamed Product'}
      </h3>
      <div>
        <div className={discountPrice ? 'line-through italic text-sm' : 'text-lg'}>{price} $</div>
        {discountPrice && (
          <div className={'text-red-700 font-additional text-lg flex gap-x-2'}>
            {discountPrice} $
          </div>
        )}
      </div>
      <p className="mt-2 text-gray-600 line-clamp-3 overflow-hidden">
        {description ? description.value : 'No description available'}
      </p>
    </div>
  );
}
interface ProductListProps {
  product: ProductProjection;
}
