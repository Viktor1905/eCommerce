import styles from './../HomePage.module.css';

export function AsideBlock() {
  return (
    <aside className={styles['aside-info-block']}>
      <div className={styles['aside-up-block']}></div>
      <div className={styles['aside-down-block']}></div>
    </aside>
  );
}
