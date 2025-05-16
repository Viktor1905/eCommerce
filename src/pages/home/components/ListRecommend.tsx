import styles from './../HomePage.module.css';

export function ListRecommend() {
  return (
    <div className={styles['list-recommend']}>
      <ListPagesRecommend />
      <span className={`material-symbols-outlined ${styles['small-left-arrow']}`}>play_circle</span>
      <span className={`material-symbols-outlined ${styles['small-right-arrow']}`}>
        play_circle
      </span>
    </div>
  );
}

function ListPagesRecommend() {
  return (
    <>
      <div className={styles.img0} />
      <div className={styles.img1} />
      <div className={styles.img2} />
      <div className={styles.img3} />
      <div className={styles.img4} />
      <div className={styles.img5} />
    </>
  );
}
