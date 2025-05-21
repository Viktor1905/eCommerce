import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import logo from './logo.png';
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { logoutUser } from '../../api/logout/logout';

const UserContext = createContext<string | null>(null);

interface AllMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

interface AddMenuBlockProps {
  toggleMenu: () => void;
}

export function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState('Guest');

  useEffect(() => {
    const updateUser = () => {
      const name = localStorage.getItem('firstName') ?? 'Guest';
      setUserName(name);
    };

    updateUser();

    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'firstName') updateUser();
    };

    window.addEventListener('storage', handleStorage);
    return () => {
      window.removeEventListener('storage', handleStorage);
    };
  }, [location.pathname]);

  useEffect(() => {
    const handleGlobalUpdate = () => {
      setUserName(localStorage.getItem('firstName') ?? 'Guest');
    };

    window.addEventListener('auth-update', handleGlobalUpdate);
    return () => {
      window.removeEventListener('auth-update', handleGlobalUpdate);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles['header-wrapper']}>
      <span className={`material-symbols-outlined ${styles['add-menu-bookmark']}`}>bookmark</span>
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
            <MenuHeader />
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
  const userName = useContext(UserContext) ?? '';
  const isGuest = userName === 'Guest';

  const handleAuth = () => {
    if (!isGuest) {
      logoutUser();
      void navigate('/login');
      window.dispatchEvent(new CustomEvent('auth-update'));
    } else {
      void navigate('/login');
    }
  };

  const handleProfile = () => {
    void navigate(isGuest ? '/registration' : '/profile');
  };

  return (
    <li className={`${styles.list} ${styles['list-sing-up']}`}>
      <div className={styles['img-list']}>
        <span className={`material-symbols-outlined ${styles['person-icon']}`}>person</span>
      </div>
      <div className={styles['text-list']}>{userName}</div>
      <div className={styles['sing-up-menu']}>
        <div onClick={handleAuth} className={styles['button-login']}>
          {isGuest ? 'LOG IN' : 'LOG OUT'}
        </div>
        <span className={styles.hint}>{isGuest ? "Don't have an account?" : 'View Profile'}</span>
        <div onClick={handleProfile} className={styles['button-sing-up']}>
          {isGuest ? 'SIGN UP' : 'PROFILE'}
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
      <AsideMenuBlock isOpen={isOpen} toggleMenu={toggleMenu} />
      <AddMenuBlock toggleMenu={toggleMenu} />
    </>
  );
}

function AsideMenuBlock({ isOpen, toggleMenu }: AllMenuProps) {
  return (
    <>
      <div
        onClick={toggleMenu}
        className={`${styles['canvas-aside-menu']} ${isOpen ? styles['visible-canvas-aside-menu'] : styles['hidden-canvas-aside-menu']}`}
      ></div>
      <div
        className={`${styles['aside-add-menu']} ${isOpen ? styles['open-aside-add-menu'] : styles['close-aside-add-menu']}`}
      >
        <div onClick={toggleMenu} className={styles['button-close-aside-menu']}>
          <span className={`material-symbols-outlined`}>close</span>
        </div>
        <AsideMenuProfile toggleMenu={toggleMenu} />
        <AsideMenuOurTeam toggleMenu={toggleMenu} />
      </div>
    </>
  );
}

function AsideMenuProfile({ toggleMenu }: AddMenuBlockProps) {
  const navigate = useNavigate();
  const name = useContext(UserContext) ?? '';
  const userState = useContext(UserContext) === 'Guest' ? 'Guest' : name;
  return (
    <div
      onClick={() => {
        toggleMenu();
        if (userState !== 'Guest') void navigate('/profile');
      }}
      className={styles['aside-menu-header']}
    >
      <span className={`material-symbols-outlined ${styles['aside-person-icon']}`}>
        manage_accounts
      </span>
      <span className={styles['user-name']}>Hello, {userState}</span>
      <span className={styles['select-dot']}></span>
    </div>
  );
}

function AsideMenuOurTeam({ toggleMenu }: AddMenuBlockProps) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        toggleMenu();
        void navigate('/team');
      }}
      className={styles['aside-menu-team']}
    >
      <span className={styles['about-team']}>Our Friendly Team</span>
      <span className={`material-symbols-outlined ${styles['aside-menu-arrow']}`}>
        arrow_forward_ios
      </span>
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
