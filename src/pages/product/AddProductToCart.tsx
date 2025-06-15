import styles from './AddProductToCart.module.css';
import { addItemToCart } from '../../api/cart-api/manage-item-in-cart';
import { useParams } from 'react-router-dom';
import { useCallback, useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { getTokenFromCookie } from '../profile/ProfilePage';
import { getLastActiveCart } from '../../api/cart-api/get-cart';
import { useNavigate } from 'react-router-dom';

export function AddProductToCart() {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams<{ id: string }>();
  const [isNoInCart, setNoInCart] = useState(true);

  const fetchCart = useCallback(async () => {
    try {
      const cartData = await getLastActiveCart();
      const checkCart = cartData.lineItems?.some((idItem) => idItem.productId === id);
      setNoInCart(checkCart ?? true);
    } catch (error) {
      console.error('Cart Error:', error);
    }
  }, [id]);
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
        onClick={() => {
          if (typeof getTokenFromCookie() !== 'string') {
            toast.success('✓ You need to be logged in to access your shopping cart!', {
              position: 'top-right',
            });
            return;
          }
          if (quantity && quantity > 0 && !isNoInCart) {
            if (id) {
              void addItemToCart({ productId: id, quantity });
              setTimeout(() => {
                void navigate('/cart');
              }, 350);
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
