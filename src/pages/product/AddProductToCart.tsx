import styles from './AddProductToCart.module.css';
import { addItemToCart } from '../../api/cart-api/manage-item-in-cart';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { getTokenFromCookie } from '../profile/ProfilePage';

export function AddProductToCart() {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams<{ id: string }>();
  return (
    <div className={styles['wrapper-add-cart']}>
      <ToastContainer className={'w-0 h-0'} />
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
          cursor: quantity < 1 ? 'not-allowed' : 'pointer',
        }}
        onClick={() => {
          if (typeof getTokenFromCookie() !== 'string') {
            toast.success('✓ Login', {
              position: 'top-right',
            });
            return;
          }
          if (quantity && quantity > 0) {
            if (id) {
              toast.success('✓ Added to cart!', {
                position: 'top-right',
              });
              void addItemToCart({ productId: id, quantity });
            } else {
              toast.success('✓ Added to cart!', {
                position: 'top-right',
              });
            }
          }
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
