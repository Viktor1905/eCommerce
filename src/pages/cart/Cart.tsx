import styles from './Cart.module.css';
import empty from './components/cartEmptyCorgi.png';
import { useEffect, useState } from 'react';

export function CartPage() {
  useEffect(() => {
    document.title = 'Cart | Zoo Shop | Pet Supplies';
  }, []);
  CartPageState();
  return <CartPageState />;
}

function CartPageState() {
  const [isStatePage, setStatePage] = useState(true);
  setStatePage(false);
  if (isStatePage) {
    return <CartPageEmpty />;
  } else {
    return <CartPageFull />;
  }
}

function CartPageEmpty() {
  return (
    <div className={styles['canvas-page']}>
      <h2 className={styles['cart-title-empty']}>It&apos;s time to start shopping!</h2>
      <span className={styles['cart-text-empty']}>
        Fill it with discounts from our popular departments
      </span>
      <div className={styles['cart-background']}>
        <img className={styles['empty-img']} src={empty} alt="empty"></img>
      </div>
    </div>
  );
}

function CartPageFull() {
  return (
    <div className={styles['wrapper-cart']}>
      <div className={styles['shopping-cart']}>
        <h2 className={styles['shopping-cart-title']}>Shopping Cart</h2>
        <span className={styles['shopping-cart-subtitle']}>Price</span>
        <CartElement />
      </div>
      <div className={styles['subtotal-price-cart']}>
        <BonusCode />
        <span className={styles['enter-bonus']}>Enter a promo code</span>
        <div className={styles.subtotal}>
          Subtotal:
          <span className={styles.items}>(14 items)</span>
        </div>
        <div className={styles['total-price']}>USD 726.50</div>
        <button className={styles['proceed-to-buy']} type="button">
          Proceed to Buy
        </button>
      </div>
    </div>
  );
}

function BonusCode() {
  return (
    <div className={styles['bonus-code-button']}>
      <input className={styles['bonus-code']} type="text" defaultValue={'PETBDAY10'}></input>
      <span className={styles['apply-bonus-code']}>apply</span>
    </div>
  );
}

function CartElement() {
  return (
    <div>
      Elements
      <div className={styles['clear-cart']}>
        EMPTY CART<span className="material-symbols-outlined">shopping_cart_off</span>
      </div>
    </div>
  );
}
