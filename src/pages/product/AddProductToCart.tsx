import styles from './AddProductToCart.module.css';
import { addItemToCart } from '../../api/cart-api/manage-item-in-cart';
import { removeItemFromCart } from '../../api/cart-api/manage-item-in-cart';
import { useParams } from 'react-router-dom';
import { useCallback, useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { getTokenFromCookie } from '../profile/ProfilePage';
import { getLastActiveCart } from '../../api/cart-api/get-cart';
import { setProductNumber } from '../../store/slice/cart-slice.ts';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store.ts';

export function AddProductToCart() {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams<{ id: string }>();
  const [isNoInCart, setNoInCart] = useState(false);
  const [lineItemId, setLineItemId] = useState<string | null>(null);
  const [totalQuantity, setTotalQuantity] = useState<number | null>(null);

  const fetchCart = useCallback(async () => {
    try {
      if (!getTokenFromCookie()) {
        return;
      }
      const cartData = await getLastActiveCart();
      const checkCart = cartData.lineItems?.some((idItem) => idItem.productId === id);
      const lineItemsData = cartData.lineItems?.find((product) => product.productId === id);
      setNoInCart(checkCart === true);

      setLineItemId(lineItemsData?.id ?? null);
      setTotalQuantity(lineItemsData?.quantity ?? null);
    } catch (error) {
      console.error('Cart Error:', error);
    }
  }, [id]);
  const dispatch = useDispatch<AppDispatch>();
  const addItemClick = async () => {
    try {
      if (typeof getTokenFromCookie() !== 'string') {
        toast.success('✓ You need to be logged in to access your shopping cart!', {
          position: 'top-right',
        });
        return;
      }
      if (quantity && quantity > 0 && !isNoInCart) {
        if (id) {
          const response = await addItemToCart({ productId: id, quantity });
          if (response.lineItems) {
            dispatch(setProductNumber(response.lineItems.length));
          }
          setNoInCart(true);
        }
      } else {
        if (quantity && quantity > 0) {
          toast.success('✓ This product is already in your cart!', {
            position: 'top-right',
          });
          return;
        }
      }
      setNoInCart(!isNoInCart);
    } catch (error) {
      console.error('Ошибка при обновлении корзины:', error);
    }
  };
  const removeItemClick = async () => {
    setNoInCart(!isNoInCart);
    if (id && lineItemId && totalQuantity) {
      const response = await removeItemFromCart({
        lineItemId: lineItemId,
        quantity: totalQuantity,
      });
      if (response.lineItems) {
        dispatch(setProductNumber(response.lineItems.length));
      }
    }
  };
  useEffect(() => {
    void fetchCart();
  }, [fetchCart]);

  return (
    <div className={styles['wrapper-add-cart']}>
      <ToastContainer
        className={'w-0 h-0'}
        closeOnClick={true}
        style={{ top: '80px' }}
        toastStyle={{ opacity: 0.85 }}
      />
      <label className={styles.quantity} htmlFor="input-quantity">
        Quantity
        <input
          id="input-quantity"
          className={styles['input-quantity']}
          type="number"
          min="1"
          max="99"
          value={quantity}
          onChange={(event) => {
            setQuantity(Number(event.target.value));
          }}
        ></input>
      </label>
      <button
        type="button"
        className={styles['add-to-cart-button']}
        style={{
          cursor: quantity < 1 ? 'not-allowed' : !isNoInCart ? 'pointer' : 'not-allowed',
        }}
        onClick={() => void addItemClick()}
      >
        Add to Cart
      </button>
      <span
        className="material-symbols-outlined hover:cursor-pointer"
        style={{
          display: !isNoInCart ? 'none' : 'flex',
        }}
        onClick={() => void removeItemClick()}
      >
        delete
      </span>
    </div>
  );
}
