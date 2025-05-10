import styles from './HomePage.module.css';

export function HomePage() {
  return (
    <main className={styles.main}>
      <TitleMain />
      <div className={styles['info-blocks']}>
        <MainBlock />
        <AsideBlock />
      </div>
      <Recommend />
      <ListRecommend />
      <Brands />
      <ListBrands />
    </main>
  );
}

function TitleMain() {
  return (
    <h1 className={styles['title-main']}>
      PET{' '}
      <span className="material-symbols-outlined" style={{ fontSize: '1.6rem' }}>
        pets
      </span>{' '}
      SUPPLIES
    </h1>
  );
}

function MainBlock() {
  return (
    <div className={styles['main-info-block']}>
      <span
        className={`material-symbols-outlined ${styles['left-arrow']}`}
        style={{ fontSize: '3rem', transform: 'rotate(-90deg)' }}
      >
        pets
      </span>
      <span
        className={`material-symbols-outlined ${styles['right-arrow']}`}
        style={{ fontSize: '3rem', transform: 'rotate(90deg)' }}
      >
        pets
      </span>
    </div>
  );
}

function AsideBlock() {
  return (
    <aside className={styles['aside-info-block']}>
      <div className={styles['aside-up-block']}></div>
      <div className={styles['aside-down-block']}></div>
    </aside>
  );
}

function Recommend() {
  return <h2 className={styles.recommend}>Our Recommendations</h2>;
}

function ListRecommend() {
  return (
    <div className={styles['list-recommend']}>
      <span
        className={`material-symbols-outlined ${styles['small-left-arrow']}`}
        style={{ fontSize: '2rem', transform: 'rotate(-90deg)' }}
      >
        pets
      </span>
      <span
        className={`material-symbols-outlined ${styles['small-right-arrow']}`}
        style={{ fontSize: '2rem', transform: 'rotate(90deg)' }}
      >
        pets
      </span>
    </div>
  );
}

function Brands() {
  return <h2 className={styles.brands}>Brands</h2>;
}

function ListBrands() {
  return (
    <div className={styles['list-brands']}>
      <span
        className={`material-symbols-outlined ${styles['brand-left-arrow']}`}
        style={{ fontSize: '2rem', transform: 'rotate(-90deg)' }}
      >
        pets
      </span>
      <span
        className={`material-symbols-outlined ${styles['brand-right-arrow']}`}
        style={{ fontSize: '2rem', transform: 'rotate(90deg)' }}
      >
        pets
      </span>
    </div>
  );
}
