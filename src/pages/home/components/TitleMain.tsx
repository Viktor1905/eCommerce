import styles from './../HomePage.module.css';

export function TitleMain() {
  return (
    <h1 className={styles['title-main']}>
      PET <span className={`material-symbols-outlined ${styles['pets-logo-icon']}`}>pets</span>{' '}
      SUPPLIES
    </h1>
  );
}
