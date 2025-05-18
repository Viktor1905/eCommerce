import styles from './Cart.module.css';
import empty from './components/cartEmptyCorgi.png';
import { useEffect } from 'react';

export function CartPage() {
  useEffect(() => {
    document.title = 'Cart | Zoo Shop | Pet Supplies';
  }, []);
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
