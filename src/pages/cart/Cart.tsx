import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCartByCartID } from '../../api/cart-api/get-cart';
import { getTokenFromCookie } from '../profile/ProfilePage';
import { cartItemResponse, cartResponse } from '../../api/cart-api/cart-types';
import { addItemToCart, removeItemFromCart } from '../../api/cart-api/manage-item-in-cart';
import styles from './Cart.module.css';
import empty from './components/cartEmptyCorgi.png';
import { Spinner } from '../../pages/product/Product';
import { getLastActiveCart } from '../../api/cart-api/get-cart';

export function CartPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<cartResponse | null>(null);

  const refreshCart = useCallback(async () => {
    const token = getTokenFromCookie();
    if (!token) {
      void navigate('/login', { replace: true });
      return;
    }
    const currentActiveCart = await getLastActiveCart();
    try {
      const cartInfo = await getCartByCartID(currentActiveCart.id);
      setCart(cartInfo);
    } catch (error) {
      console.error('Error fetching cart:', error);
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  useEffect(() => {
    void refreshCart();
  }, [refreshCart]);

  useEffect(() => {
    document.title = 'Cart | Zoo Shop | Pet Supplies';
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (!cart || !cart.lineItems || cart.lineItems.length === 0) {
    return <CartPageEmpty />;
  }
  const currentQuantity = cart.lineItems.reduce((sum, element) => {
    return sum + element.quantity;
  }, 0);

  return (
    <div className={styles['wrapper-cart']}>
      <div className={styles['shopping-cart']}>
        <h2 className={styles['shopping-cart-title']}>Shopping Cart</h2>
        {cart.lineItems.map((item) => (
          <CartItem key={item.id} cartItem={item} refreshCart={refreshCart} />
        ))}

        <div className={styles['clear-cart']}>
          EMPTY CART<span className="material-symbols-outlined">shopping_cart_off</span>
        </div>
      </div>

      <div className={styles['subtotal-price-cart']}>
        <BonusCode />
        <span className={styles['enter-bonus']}>Enter a promo code</span>
        <div className={styles.subtotal}>
          Subtotal:
          <span className={styles.items}>({currentQuantity} items)</span>
        </div>
        <div className={styles['total-price']}>
          {cart.totalPrice.currencyCode} {(cart.totalPrice.centAmount / 100).toFixed(2)}
        </div>
        <button className={styles['proceed-to-buy']} type="button">
          Proceed to Buy
        </button>
      </div>
    </div>
  );
}

function CartItem({
  cartItem,
  refreshCart,
}: {
  cartItem: cartItemResponse;
  refreshCart: () => Promise<void>;
}) {
  const handleAddItemClick = async (): Promise<void> => {
    await addItemToCart({ productId: cartItem.productId, quantity: 1 });
    await refreshCart();
  };

  const handleRemoveItemClick = async (): Promise<void> => {
    await removeItemFromCart({ lineItemId: cartItem.id, quantity: 1 });
    await refreshCart();
  };

  return (
    <div
      className="flex flex-col justify-between text-olive border-t py-4 w-full"
      aria-label="item in cart"
    >
      <h3 className="flex text-olive p-2" aria-label="item name">
        {cartItem.name['en-US']}
      </h3>
      <div className="flex flex-row items-center p-5" aria-label="item information">
        <img
          className="min-w-16 size-16 bg-gray-200 object-contain"
          src={cartItem.variant.images[0].url}
          alt={cartItem.name['en-US']}
        />
      </div>

      <div
        aria-label="price and quantity"
        className="w-fit p-2 items-center text-center justify-center"
      >
        <div className="flex flex-row gap-2 p-2 justify-between items-center min-w-fit">
          <div
            aria-label="item quantity"
            className="flex flex-row no-wrap items-center p-1 w-fit rounded-2xl border border-[var(--color-goldenrod)]"
          >
            <button
              className="flex justify-center items-center rounded-full size-6 hover:cursor-pointer"
              onClick={() => {
                void handleRemoveItemClick();
              }}
            >
              -
            </button>
            <div className="w-10 text-center">{cartItem.quantity}</div>
            <button
              className="flex justify-center items-center rounded-full size-6 hover:cursor-pointer"
              onClick={() => {
                void handleAddItemClick();
              }}
            >
              +
            </button>
          </div>
          <span className="material-symbols-outlined">shopping_cart_checkout</span>
          {cartItem.price.discounted ? (
            <>
              <span aria-label="price per 1" className="w-fit line-through text-xs">
                {(cartItem.price.value.centAmount / 100).toFixed(2)}
              </span>
              <span aria-label="price per 1 discounted" className="w-fit text-red-700">
                {(cartItem.price.discounted.value.centAmount / 100).toFixed(2)}
              </span>
            </>
          ) : (
            <span aria-label="price per 1" className="w-fit">
              {(cartItem.price.value.centAmount / 100).toFixed(2)}
            </span>
          )}
          <span className="text-[clamp(8px,1vw,12px)] mb-5 inline-block">
            {cartItem.totalPrice.currencyCode}
          </span>
        </div>
        <div className="flex flex-row gap-2 p-2 justify-between">
          <div>{'Total: '}</div>
          <div>
            {cartItem.totalPrice.currencyCode} {(cartItem.totalPrice.centAmount / 100).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}

function CartPageEmpty() {
  return (
    <div className={styles['canvas-page']}>
      <h2 className={styles['cart-title-empty']}>It&apos;s time to start shopping!</h2>
      <span className={styles['cart-text-empty']}>
        Fill it with discounts from our popular departments
      </span>
      <div className={styles['cart-background']}>
        <img className={styles['empty-img']} src={empty} alt="empty"></img>
      </div>
    </div>
  );
}

function BonusCode() {
  return (
    <div className={styles['bonus-code-button']}>
      <input className={styles['bonus-code']} type="text" defaultValue={'PETBDAY10'} />
      <span className={styles['apply-bonus-code']}>apply</span>
    </div>
  );
}
