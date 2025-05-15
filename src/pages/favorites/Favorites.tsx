import styles from './Favorites.module.css';
import favorites from './components/corgiPaint.png';

export function FavoritesPage() {
  return (
    <div className={styles['canvas-page']}>
      <h2 className={styles['favorites-title']}>Favorites page coming soon”</h2>
      <div className={styles['favorites-background']}>
        <img className={styles['favorites-img']} src={favorites} alt="favorites"></img>
      </div>
    </div>
  );
}
