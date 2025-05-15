import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import logo from './logo.png';
import { useState } from 'react';
import { useEffect } from 'react';

interface AllMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <div className={styles['header-wrapper']}>
      <AddMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      <header className={styles.header}>
        <div className={styles['header-case']}>
          <div className={styles['header-inner']}>
            <div className={styles['home-link-wrapper']}>
              <Logo />
              <HomeLink />
            </div>
            <SearchPanel />
          </div>
          <MenuHeader />
        </div>
      </header>
    </div>
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

function Logo() {
  return (
    <div className={styles['logo-header']}>
      <img className={styles.logo} src={logo} alt="logo"></img>
    </div>
  );
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
      <div className={styles['nav-home-link-wrapper']}>
        <Logo />
        <HomeLink />
      </div>
      <ul className={styles['menu-list']}>
        <li className={`${styles.list} ${styles['list-sing-up']}`}>
          <div className={styles['sing-up-menu']}>
            <div className={styles['button-login']}>LOG IN</div>
            <span>Don&apos;t have an account?</span>{' '}
            <div className={styles['button-sing-up']}>Sing Up</div>
          </div>
          <div className={styles['img-list']}>
            <span className={`material-symbols-outlined ${styles['person-icon']}`}>person</span>
          </div>
          <div className={styles['text-list']}>Sign Up</div>
        </li>
        <li className={`${styles.list} ${styles['list-order']}`}>
          <div className={styles['img-list']}>
            <span className={`material-symbols-outlined ${styles['order-icon']}`}>package_2</span>
          </div>
          <div className={styles['text-list']}>Orders</div>
        </li>
        <li className={`${styles.list} ${styles['list-favorite']}`}>
          {' '}
          <div className={styles['img-list']}>
            <span className={`material-symbols-outlined ${styles['favorite-icon']}`}>favorite</span>
          </div>
          <div className={styles['text-list']}>Favorites</div>
        </li>
        <li className={`${styles.list} ${styles['list-counter']}`}>
          <div className={styles['counter-cart']}>0</div>
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

function AddMenu({ isOpen, toggleMenu }: AllMenuProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);
  return (
    <>
      <div
        onClick={toggleMenu}
        className={`${styles['canvas-aside-menu']} ${isOpen ? styles['visible-canvas-aside-menu'] : styles['hidden-canvas-aside-menu']}`}
      ></div>
      <div
        className={`${styles['aside-add-menu']} ${isOpen ? styles['open-aside-add-menu'] : styles['close-aside-add-menu']}`}
      >
        <div className={styles['aside-menu-header']}>
          <div onClick={toggleMenu} className={styles['button-close-aside-menu']}>
            <span className={`material-symbols-outlined ${styles['aside-close-icon']}`}>close</span>
          </div>
          <span className={`material-symbols-outlined ${styles['aside-person-icon']}`}>person</span>
          Hello
        </div>
      </div>
      <div className={styles['add-header-menu']}>
        <div onClick={toggleMenu} className={styles['add-menu-button-all']}>
          <span className="material-symbols-outlined">menu</span>
          All
        </div>
        <div className={styles['add-menu-list']}>
          <div className={styles['add-menu-catalog']}>Catalog</div>
        </div>
        <div className={styles['add-menu-list']}>
          <div className={styles['add-menu-pet-food']}>Pet food</div>
        </div>
        <div className={styles['add-menu-list']}>
          <div className={styles['add-menu-accessories']}>Accessories</div>
        </div>
        <div className={styles['add-menu-list']}>
          <div className={styles['add-menu-promotions']}>Promotions</div>
        </div>
      </div>
    </>
  );
}
