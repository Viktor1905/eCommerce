import styles from './OrdersPage.module.css';
import orders from './components/corgiPaint.png';
import { useEffect } from 'react';

export function OrdersPage() {
  useEffect(() => {
    document.title = 'Order | Zoo Shop | Pet Supplies';
  }, []);
  return (
    <div className={styles['canvas-page']}>
      <h2 className={styles['orders-title']}>Orders page coming soon”</h2>
      <div className={styles['orders-background']}>
        <img className={styles['orders-img']} src={orders} alt="orders"></img>
      </div>
    </div>
  );
}
