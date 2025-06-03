import { ReactElement } from 'react';
import { Attribute, ProductProjection } from '../../../../api/catalog/products.types.ts';
import saleIcon from '../assets/sale.svg';
import { NavigateFunction, useNavigate } from 'react-router-dom';

export function CatalogItem({ product }: ProductListProps): ReactElement {
  const description: Attribute | undefined = product.masterVariant.attributes?.find(
    (obj: Attribute): boolean => {
      return obj.name === 'small-description';
    }
  );

  const enUs = product.description?.['en-US'];

  let firstLocale: string | undefined;
  if (!enUs && product.description) {
    const values = Object.values(product.description);
    if (values.length > 0) firstLocale = values[0];
  }

  const descriptionText =
    description && typeof description.value === 'string'
      ? description.value
      : (enUs ?? firstLocale ?? 'No description available');

  const isDiscount: number | false =
    product.masterVariant.prices[product.masterVariant.prices.length - 1]?.discounted?.value
      .centAmount ?? false;
  const discountPrice: number | false = isDiscount ? isDiscount / 100 : false;
  const price: number =
    product.masterVariant.prices[product.masterVariant.prices.length - 1]?.value.centAmount / 100;
  const navigate: NavigateFunction = useNavigate();
  const onClick: () => Promise<void> = async (): Promise<void> => {
    await navigate(`/product/${product.id}`);
  };
  return (
    <div
      key={product.id}
      className="rounded-lg p-2 bg-white hover:shadow-md font-main cursor-pointer hover:border-0  hover:scale-105 max-w-[310px] duration-300 origin-top transition-transform min-h-[400px] "
      onClick={(): void => {
        void onClick();
      }}
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
      <div className={'flex gap-2 items-center'}>
        <div className={discountPrice ? 'line-through italic text-sm' : 'text-lg'}>{price} $</div>
        {discountPrice && (
          <div className={'text-red-700 font-additional text-lg flex gap-x-2'}>
            {discountPrice} $
          </div>
        )}
      </div>
      <p className="mt-2 text-gray-600 line-clamp-3 overflow-hidden">{descriptionText}</p>
    </div>
  );
}
interface ProductListProps {
  product: ProductProjection;
}
