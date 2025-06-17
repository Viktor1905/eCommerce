import { ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import { Attribute, ProductProjection } from '../../../../api/catalog/products.types.ts';
import saleIcon from '../assets/sale.svg';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import styles from '../../../product/AddProductToCart.module.css';
import { getTokenFromCookie } from '../../../profile/ProfilePage.tsx';
import { toast } from 'react-toastify';
import { addItemToCart } from '../../../../api/cart-api/manage-item-in-cart.ts';
import { getLastActiveCart } from '../../../../api/cart-api/get-cart.ts';

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

  const addButton = useRef<HTMLButtonElement>(null);
  const onClick = async (
    event: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement>
  ): Promise<void> => {
    if (addButton.current && event.target !== addButton.current) {
      await navigate(`/product/${product.id}`);
    }
  };

  const id = product.id;
  const [isNoInCart, setNoInCart] = useState(false);
  const fetchCart = useCallback(async () => {
    try {
      const cartData = await getLastActiveCart();
      const checkCart = cartData.lineItems?.some((idItem) => idItem.productId === id);
      setNoInCart(checkCart === true);
    } catch (error) {
      console.error('Cart Error:', error);
    }
  }, [id]);
  useEffect(() => {
    void fetchCart();
  }, [fetchCart]);
  return (
    <div
      key={product.id}
      className=" flex flex-col justify-around rounded-lg p-2 bg-white hover:shadow-md font-main cursor-pointer hover:border-0  hover:scale-105 max-w-[310px] duration-300 origin-top transition-transform min-h-[400px] "
      onClick={(event): void => {
        void onClick(event);
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
      <button
        type="button"
        ref={addButton}
        className={styles['add-to-cart-button']}
        style={{
          cursor: !isNoInCart ? 'pointer' : 'not-allowed',
          opacity: isNoInCart ? '0.7' : '1',
        }}
        onClick={() => {
          if (typeof getTokenFromCookie() !== 'string') {
            toast.success('✓ You need to be logged in to access your shopping cart!', {
              position: 'top-right',
            });
            return;
          }
          if (!isNoInCart) {
            if (id) {
              void addItemToCart({ productId: id });
              setNoInCart(true);
            }
          } else {
            toast.success('✓ This product is already in your cart!', {
              position: 'top-right',
            });
          }
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
interface ProductListProps {
  product: ProductProjection;
}
