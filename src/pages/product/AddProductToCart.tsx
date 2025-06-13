import styles from './AddProductToCart.module.css';

export function AddProductToCart() {
  return (
    <div className={styles['wrapper-add-cart']}>
      <label className={styles.quantity} htmlFor="input-quantity">
        Quantity
        <input
          id="input-quantity"
          className={styles['input-quantity']}
          type="number"
          min="1"
          max="99"
          defaultValue={1}
        ></input>
      </label>
      <button type="button" className={styles['add-to-cart-button']}>
        Add to Cart
      </button>
    </div>
  );
}
