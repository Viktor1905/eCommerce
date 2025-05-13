import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles['header-case']}>
        <div className={styles['header-wrapper']}>
          <HomeLink />
          <CatalogList />
          <SearchPanel />
        </div>
        <MenuHeader />
      </div>
    </header>
  );
}

function HomeLink() {
  const navigate = useNavigate();
  function handleClick(): void {
    void navigate('/');
  }
  return (
    <div className={styles['home-link']}>
      <span
        onClick={handleClick}
        className={`material-symbols-outlined ${styles['main-home-icon']}`}
      >
        home
      </span>
    </div>
  );
}

function CatalogList() {
  return <div className={styles.catalog}>Catalog ▾</div>;
}

function SearchPanel() {
  return (
    <div className={styles.search}>
      <div className={styles['menu-search']}>Search in ▾</div>
      <input
        type="search"
        className={styles['input-search']}
        placeholder="Search products… 🔍"
      ></input>
    </div>
  );
}

function MenuHeader() {
  return (
    <nav className={styles.menu}>
      <ul className={styles['menu-list']}>
        <li className={styles.list}>
          <div className={styles['img-list']}>
            <span className={`material-symbols-outlined ${styles['person-icon']}`}>person</span>
          </div>
          <div className={styles['text-list']}>Sign Up</div>
        </li>
        <li className={styles.list}>
          <div className={styles['img-list']}>
            <span className={`material-symbols-outlined ${styles['pets-icon']}`}>pets</span>
          </div>
          <div className={styles['text-list']}>Login</div>
        </li>
        <li className={styles.list}>
          <div className={styles['img-list']}>
            <span className={`material-symbols-outlined ${styles['order-icon']}`}>package_2</span>
          </div>
          <div className={styles['text-list']}>Orders</div>
        </li>
        <li className={styles.list}>
          <div className={styles['img-list']}>
            <span className={`material-symbols-outlined ${styles['favorite-icon']}`}>favorite</span>
          </div>
          <div className={styles['text-list']}>Favorites</div>
        </li>
        <li className={styles.list}>
          <div className={styles['img-list']}>
            <span className={`material-symbols-outlined ${styles['cart-icon']}`}>
              shopping_cart
            </span>
          </div>
          <div className={styles['text-list']}>Cart</div>
        </li>
      </ul>
    </nav>
  );
}
