import styles from './../HomePage.module.css';

export function ListBrands() {
  return (
    <div className={styles['list-brands']}>
      <ListPagesBrands />
      <span className={`material-symbols-outlined ${styles['brand-left-arrow']}`}>play_circle</span>
      <span className={`material-symbols-outlined ${styles['brand-right-arrow']}`}>
        play_circle
      </span>
    </div>
  );
}

function ListPagesBrands() {
  return (
    <>
      <div className={styles.img6} />
      <div className={styles.img7} />
      <div className={styles.img8} />
      <div className={styles.img9} />
      <div className={styles.img10} />
      <div className={styles.img11} />
      <div className={styles.img12} />
      <div className={styles.img13} />
    </>
  );
}
