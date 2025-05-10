import styles from './Header.module.css';
import logo from '../../assets/images/pawpaw.png';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles['header-case']}>
        <Logo />
        <CatalogList />
        <SearchPanel />
        <MenuHeader />
      </div>
    </header>
  );
}

function Logo() {
  return (
    <div className={styles['image-case']}>
      <img className={styles['logo-image']} src={logo} alt="logo image"></img>
    </div>
  );
}

function CatalogList() {
  return (
    <button type="button" className={styles.catalog}>
      Catalog ▾
    </button>
  );
}

function SearchPanel() {
  return (
    <div className={styles.search}>
      <button type="button" className={styles['menu-search']}>
        Search in ▾
      </button>
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
            <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>
              pets
            </span>
          </div>
          <div className={styles['text-list']}>Login</div>
        </li>
        <li className={styles.list}>
          <div className={styles['img-list']}>
            <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>
              package_2
            </span>
          </div>
          <div className={styles['text-list']}>Orders</div>
        </li>
        <li className={styles.list}>
          <div className={styles['img-list']}>
            <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>
              favorite
            </span>
          </div>
          <div className={styles['text-list']}>Favorites</div>
        </li>
        <li className={styles.list}>
          <div className={styles['img-list']}>
            <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>
              shopping_cart
            </span>
          </div>
          <div className={styles['text-list']}>Cart</div>
        </li>
      </ul>
    </nav>
  );
}
