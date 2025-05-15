import styles from './OrdersPage.module.css';
import orders from './components/corgiPaint.png';

export function OrdersPage() {
  return (
    <div className={styles['canvas-page']}>
      <h2 className={styles['orders-title']}>Orders page coming soon”</h2>
      <div className={styles['orders-background']}>
        <img className={styles['orders-img']} src={orders} alt="orders"></img>
      </div>
    </div>
  );
}
