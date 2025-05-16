import styles from './CatalogPage.module.css';
import catalog from './components/corgiPaint.png';

export function CatalogPage() {
  return (
    <div className={styles['canvas-page']}>
      <h2 className={styles['catalog-title']}>Catalog page coming soon”</h2>
      <div className={styles['catalog-background']}>
        <img className={styles['catalog-img']} src={catalog} alt="catalog"></img>
      </div>
    </div>
  );
}
