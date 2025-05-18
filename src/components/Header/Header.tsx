import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import logo from './logo.png';
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext, useContext } from 'react';

const UserContext = createContext<string | null>(null);
const RefreshContext = createContext<() => void>(() => {
  return;
});

interface AllMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

interface AddMenuBlockProps {
  toggleMenu: () => void;
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [, setRefresh] = useState(0);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  // localStorage.setItem('user', JSON.stringify('44453t2t'));

  const data = localStorage.getItem('user');
  let userName = 'Guest';
  if (data) {
    const parsed: unknown = JSON.parse(data);
    if (typeof parsed === 'string') userName = parsed;
  }
  return (
    <div className={styles['header-wrapper']}>
      <UserContext.Provider value={userName}>
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
            <RefreshContext.Provider
              value={() => {
                setRefresh((prev) => prev + 1);
              }}
            >
              <MenuHeader />
            </RefreshContext.Provider>
          </div>
        </header>
      </UserContext.Provider>
    </div>
  );
}

function HomeLink() {
  const navigate = useNavigate();
  return (
    <div className={styles['home-link']}>
      <span
        onClick={() => void navigate('/')}
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
        <Login />
        <Order />
        <Favorite />
        <Cart />
      </ul>
    </nav>
  );
}

function Login() {
  const navigate = useNavigate();
  const name = useContext(UserContext) ?? '';
  const triggerRefresh = useContext(RefreshContext);
  let userState = name;
  let authStatus = 'LOG OUT';
  let hint = 'View Profile';
  let signUpOrProfile = 'PROFILE';

  if (useContext(UserContext) === 'Guest') {
    userState = 'Guest';
    authStatus = 'LOG ON';
    hint = "Don't have an account?";
    signUpOrProfile = 'Sing Up';
  }
  return (
    <li className={`${styles.list} ${styles['list-sing-up']}`}>
      <div className={styles['img-list']}>
        <span className={`material-symbols-outlined ${styles['person-icon']}`}>person</span>
      </div>
      <div className={styles['text-list']}>{userState}</div>
      <div className={styles['sing-up-menu']}>
        <div
          onClick={() => {
            if (authStatus === 'LOG ON') {
              void navigate('/login');
            } else {
              localStorage.removeItem('user');
              triggerRefresh();
            }
          }}
          className={styles['button-login']}
        >
          {authStatus}
        </div>
        <span className={styles.hint}>{hint}</span>{' '}
        <div
          onClick={() => {
            if (authStatus === 'LOG ON') {
              void navigate('/registration');
            } else {
              void navigate('/profile');
            }
          }}
          className={styles['button-sing-up']}
        >
          {signUpOrProfile}
        </div>
      </div>
    </li>
  );
}

function Order() {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => void navigate('/orders')}
      className={`${styles.list} ${styles['list-order']}`}
    >
      <div className={styles['img-list']}>
        <span className={`material-symbols-outlined ${styles['order-icon']}`}>package_2</span>
      </div>
      <div className={styles['text-list']}>Orders</div>
    </li>
  );
}

function Favorite() {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => void navigate('/favorites')}
      className={`${styles.list} ${styles['list-favorite']}`}
    >
      {' '}
      <div className={styles['img-list']}>
        <span className={`material-symbols-outlined ${styles['favorite-icon']}`}>favorite</span>
      </div>
      <div className={styles['text-list']}>Favorites</div>
    </li>
  );
}

function Cart() {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => void navigate('/cart')}
      className={`${styles.list} ${styles['list-counter']}`}
    >
      <div className={styles['counter-cart']}>0</div>
      <div className={styles['img-list']}>
        <span className={`material-symbols-outlined ${styles['cart-icon']}`}>shopping_cart</span>
      </div>
      <div className={styles['text-list']}>Cart</div>
    </li>
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
      <AsideMenuBlock isOpen={isOpen} toggleMenu={toggleMenu} />
      <AddMenuBlock toggleMenu={toggleMenu} />
    </>
  );
}

function AsideMenuBlock({ isOpen, toggleMenu }: AllMenuProps) {
  const navigate = useNavigate();
  const name = useContext(UserContext) ?? '';
  const userState = useContext(UserContext) === 'Guest' ? 'Guest' : name;
  return (
    <div
      className={`${styles['aside-add-menu']} ${isOpen ? styles['open-aside-add-menu'] : styles['close-aside-add-menu']}`}
    >
      <div
        onClick={() => {
          toggleMenu();
          void navigate('/profile');
        }}
        className={styles['aside-menu-header']}
      >
        <div onClick={toggleMenu} className={styles['button-close-aside-menu']}>
          <span className={`material-symbols-outlined ${styles['aside-close-icon']}`}>close</span>
        </div>
        <span className={`material-symbols-outlined ${styles['aside-person-icon']}`}>
          manage_accounts
        </span>
        <span className={styles['user-name']}>Hello, {userState}</span>
        <span className={styles['select-dot']}></span>
      </div>
    </div>
  );
}

function AddMenuBlock({ toggleMenu }: AddMenuBlockProps) {
  const navigate = useNavigate();
  return (
    <div className={styles['add-header-menu']}>
      <div className={styles['wrapper-add-header-menu']}>
        <div onClick={toggleMenu} className={styles['add-menu-button-all']}>
          <span className="material-symbols-outlined">menu</span>
          All
        </div>
        <div className={styles['add-menu-list']}>
          <div onClick={() => void navigate('/catalog')} className={styles['add-menu-catalog']}>
            Catalog
          </div>
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
    </div>
  );
}
