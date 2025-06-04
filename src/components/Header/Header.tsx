import styles from './Header.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from './logo.png';
import { useEffect, useState, useLayoutEffect, useRef, createContext, useContext } from 'react';
import { logoutUser } from '../../api/logout/logout';

import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../../store/slice/catalog-slice';
import { getTokenFromCookie } from '../../pages/profile/ProfilePage';
import { fetchProfile } from '../../api/profile/profile';
import { toast, ToastContainer } from 'react-toastify';
import type { AppDispatch } from '../../store/store';

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
    const fetchUser = async () => {
      const token = getTokenFromCookie();
      if (!token) {
        setUserName('Guest');
        return;
      }

      try {
        const customerInfo = await fetchProfile(token);
        setUserName(customerInfo.firstName || 'Guest');
      } catch (error) {
        console.error('Error fetching profile:', error);
        setUserName('Guest');
      }
    };

    void fetchUser();
  }, [location.pathname]);

  useEffect(() => {
    const clearAuthCookies = () => {
      document.cookie = 'refresh_token=; Max-Age=0; path=/';
      document.cookie = 'access_token=; Max-Age=0; path=/';
    };

    const handleAuthUpdate = () => {
      const token = getTokenFromCookie();
      if (!token) {
        clearAuthCookies();
        setUserName('Guest');
        return;
      }

      void fetchProfile(token)
        .then((customerInfo) => {
          setUserName(customerInfo.firstName || 'Guest');
        })
        .catch(() => {
          clearAuthCookies();
          setUserName('Guest');
        });
    };

    window.addEventListener('auth-update', handleAuthUpdate);
    return () => {
      window.removeEventListener('auth-update', handleAuthUpdate);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles['header-wrapper']}>
      <UserContext.Provider value={userName}>
        <div className="flex flex-col w-full relative">
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
          <span className={`material-symbols-outlined ${styles['add-menu-bookmark']}`}>
            bookmark
          </span>
          <AddMenu isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
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
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  function handleSearch(): void {
    const rawValue = inputRef.current?.value ?? '';
    const value = rawValue.trim();
    dispatch(setSearchTerm(value));
    if (value === '') {
      dispatch(setSearchTerm(''));
    }
  }

  useLayoutEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  return (
    <div className={styles.search}>
      <div
        className={styles['menu-search']}
        onClick={() => {
          setIsOpen(!isOpen);
          void navigate('/catalog');
          handleSearch();
        }}
      >
        <span className="material-symbols-outlined">search</span>
        Search
      </div>
      <input
        ref={inputRef}
        type="search"
        className={styles['input-search']}
        placeholder="Search pet food, toys, or brands…"
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') {
            handleSearch();
            void navigate('/catalog');
          }
        }}
      ></input>
      <span
        className={`material-symbols-outlined ${styles['back-search']}`}
        onClick={() => {
          if (inputRef.current) inputRef.current.value = '';
          handleSearch();
        }}
      >
        backspace
      </span>
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
      <ToastContainer className={'w-0 h-0'} />
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

      document.cookie = 'refresh_token=; Max-Age=0; path=/';
      document.cookie = 'access_token=; Max-Age=0; path=/';
      toast.success('Logged out!', {
        position: 'top-right',
      });
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
        <AsideMenuItems toggleMenu={toggleMenu} />
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

function AsideMenuItems({ toggleMenu }: AddMenuBlockProps) {
  const navigate = useNavigate();

  const handleClick = (linkTo: string) => {
    toggleMenu();
    void navigate(`/${linkTo}`);
  };

  const menuItems = [
    { label: 'Catalog', path: 'catalog' },
    { label: 'Profile', path: 'profile' },
    { label: 'Orders', path: 'orders' },
    { label: 'Our team', path: 'team' },
  ];

  return (
    <div className="p-4">
      <div className="flex flex-col gap-2">
        {menuItems.map(({ label, path }) => (
          <div
            key={path}
            onClick={() => {
              handleClick(path);
            }}
            className="about-team hover:cursor-pointer hover:bg-khaki p-2"
            aria-label={`Navigate to ${label}`}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

function AddMenuBlock({ toggleMenu }: AddMenuBlockProps) {
  const navigate = useNavigate();
  return (
    <div className={'flex flex-row gap-2 p-6 pt-2 pb-2 text-white'}>
      <div onClick={toggleMenu} className={styles['add-menu-list']}>
        <span className="material-symbols-outlined hover:cursor-pointer">menu</span>
        <div className={styles['add-menu-link']}>Menu</div>
      </div>
      <div className={styles['add-menu-link']} onClick={() => void navigate('/catalog')}>
        Catalog
      </div>
    </div>
  );
}
