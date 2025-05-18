import styles from './../HomePage.module.css';

export function MainBlock() {
  return (
    <div className={styles['main-info-block']}>
      <span className={`material-symbols-outlined ${styles['left-arrow']}`}>pets</span>
      <span className={`material-symbols-outlined ${styles['right-arrow']}`}>pets</span>
    </div>
  );
}
