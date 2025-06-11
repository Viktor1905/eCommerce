import { ReactElement, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCartByCartID } from '../../api/cart-api/get-cart';
import { getTokenFromCookie } from '../profile/ProfilePage';
import { cartItemResponse, cartResponse } from '../../api/cart-api/cart-types';
import {
  addItemToCart,
  removeItemFromCart,
  setCartAsLastActive,
} from '../../api/cart-api/manage-item-in-cart';

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

    try {
      const cartInfo = await getCartByCartID('a431a191-8b33-458e-8a4f-f3a7eebc346b');
      await setCartAsLastActive('a431a191-8b33-458e-8a4f-f3a7eebc346b');
      setCart(cartInfo);
      console.log(cartInfo);
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
  return (
    <section
      className={
        'm-auto relative flex flex-col justify-center items-center ' +
        'rounded-2xl bg-white min-w-[300px] max-w-[500px]'
      }
    >
      <h2 className="text-2xl pt-4 text-center text-jungle font-main-bd">Cart</h2>
      {loading ? (
        <div className="text-jungle p-2 m-2">Loading...</div>
      ) : cart ? (
        <div className="w-full p-2 m-1 flex flex-col gap-2 text-olive">
          <div>
            {cart.lineItems?.length === 0 ? (
              <div>no items in cart</div>
            ) : (
              cart.lineItems?.map((cartItem) => {
                return renderCartItem(cartItem, refreshCart);
              })
            )}
          </div>
          Total:
          <div>{cart.totalPrice.centAmount / 100}</div>
        </div>
      ) : (
        <div>Something went wrong</div>
      )}
    </section>
  );
}

export function renderCartItem(
  cartItem: cartItemResponse,
  refreshCart: () => Promise<void>
): ReactElement {
  async function handleAddItemClick() {
    await addItemToCart({ productId: cartItem.productId, quantity: 1 });
    await refreshCart();
  }

  async function handleRemoveItemClick() {
    await removeItemFromCart({ lineItemId: cartItem.id, quantity: 1 });
    await refreshCart();
  }

  return (
    <div
      className="flex flex-row justify-between text-olive"
      key={cartItem.id}
      aria-label="item in cart"
    >
      <div className="flex flex-row " aria-label="item information">
        <img className="min-w-16 size-16 bg-amber-600" aria-label="image preview"></img>
        <h3 className="text-olive p-2" aria-label="item name">
          {cartItem.name['en-US']}
        </h3>
      </div>

      <div
        aria-label="price and quantity"
        className="w-fit p-2 items-center text-center justify-center"
      >
        <div className="flex flex-row gap-2 p-2 justify-between items-center min-w-fit">
          <div aria-label="item quantity" className="flex flex-row no-wrap items-center w-fit">
            <button
              className="bg-gray-200 rounded-full size-8 hover:cursor-pointer"
              onClick={() => {
                void handleRemoveItemClick();
              }}
            >
              -
            </button>
            <div className="w-10 bg-blue-100 h-full">{cartItem.quantity}</div>
            <button
              className="bg-gray-200 rounded-full size-8  hover:cursor-pointer"
              onClick={() => {
                void handleAddItemClick();
              }}
            >
              +
            </button>
          </div>
          <div>{'x'}</div>

          {cartItem.price.discounted ? (
            <>
              <span aria-label="price per 1" className="w-fit line-through text-xs">
                {(cartItem.price.value.centAmount / 100).toString()}
              </span>
              <span aria-label="price per 1 discounted" className="w-fit text-red-700">
                {(cartItem.price.discounted.value.centAmount / 100).toString()}
              </span>
            </>
          ) : (
            <span aria-label="price per 1" className="w-fit">
              {(cartItem.price.value.centAmount / 100).toString()}
            </span>
          )}
        </div>
        <div className="flex flex-row gap-2 p-2 justify-between">
          <div>{'Total: '}</div>
          <div>{cartItem.totalPrice.centAmount / 100}</div>
        </div>
      </div>
    </div>
  );
}
