import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import logo from './logo.png';
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext, useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';

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
  // localStorage.setItem('firstName', JSON.stringify('44453t2t'));

  const data = localStorage.getItem('firstName');
  let userName = 'Guest';
  if (data) {
    if (typeof data === 'string') userName = data;
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
      <ToastContainer className={'w-0 h-0'} />
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
  const [userName, setUserName] = useState(
    localStorage.getItem('firstName')?.replace(/"/g, '') ?? ''
  );
  const hintValue = userName ? 'View Profile' : "Don't have an account?";
  const [hint, setHint] = useState(hintValue);

  useEffect(() => {
    const handleStorageChange = () => {
      const stored = localStorage.getItem('firstName');
      setUserName(stored ? stored.replace(/"/g, '') : '');
      setHint(stored ? 'View Profile' : "Don't have an account?");
    };

    window.addEventListener('userChange', handleStorageChange);
    return () => {
      window.removeEventListener('userChange', handleStorageChange);
    };
  }, []);

  return (
    <li className={`${styles.list} ${styles['list-sing-up']}`}>
      <div className={styles['img-list']}>
        <span className={`material-symbols-outlined ${styles['person-icon']}`}>person</span>
      </div>
      <div className={styles['text-list']}>{userName === '' ? 'Guest' : userName}</div>
      <div className={styles['sing-up-menu']}>
        {!userName ? (
          <div className="flex flex-col items-center justify-center w-full ">
            <button
              className="w-full p-1 pl-3 pr-3 text-white bg-goldenrod rounded-xl text-sm capitalize font-main font-medium hover:cursor-pointer"
              onClick={() => {
                void navigate('/login');
              }}
            >
              Log in
            </button>
            <span className="font-main">{hint}</span>
            <button
              className="w-full p-1 pl-3 pr-3 text-white bg-goldenrod rounded-xl text-sm capitalize font-main font-medium hover:cursor-pointer"
              onClick={() => {
                void navigate('/registration');
              }}
            >
              Sign up
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center w-full ">
            <button
              className="w-full p-1 pl-3 pr-3 text-white bg-goldenrod rounded-xl text-sm capitalize font-main font-medium hover:cursor-pointer"
              onClick={() => {
                localStorage.setItem('firstName', '');
                window.dispatchEvent(new Event('userChange'));
                toast.success('Logged out!', {
                  position: 'top-right',
                });
                setHint("Don't have an account?");
                void navigate('/');
              }}
            >
              Log out
            </button>
            <span className="font-main">{hint}</span>
            <button
              className="w-full p-1 pl-3 pr-3  text-white bg-goldenrod rounded-xl text-sm capitalize font-main font-medium hover:cursor-pointer"
              onClick={() => {
                void navigate('/profile');
              }}
            >
              Profile
            </button>
          </div>
        )}
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
  return (
    <div
      className={`${styles['aside-add-menu']} ${isOpen ? styles['open-aside-add-menu'] : styles['close-aside-add-menu']}`}
    >
      <div onClick={toggleMenu} className={styles['button-close-aside-menu']}>
        <span className={`material-symbols-outlined ${styles['aside-close-icon']}`}>close</span>
      </div>
      <AsideMenuProfile toggleMenu={toggleMenu} />
      <AsideMenuOurTeam toggleMenu={toggleMenu} />
    </div>
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
        void navigate('/profile');
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
