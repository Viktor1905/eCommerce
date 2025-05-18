import styles from './CatalogPage.module.css';
import catalog from './components/corgiPaint.png';
import { useEffect } from 'react';

export function CatalogPage() {
  useEffect(() => {
    document.title = 'Catalog | Zoo Shop | Pet Supplies';
  }, []);
  return (
    <div className={styles['canvas-page']}>
      <h2 className={styles['catalog-title']}>Catalog page coming soon”</h2>
      <div className={styles['catalog-background']}>
        <img className={styles['catalog-img']} src={catalog} alt="catalog"></img>
      </div>
    </div>
  );
}
