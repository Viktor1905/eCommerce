import styles from './HomePage.module.css';
import logo from '../../assets/images/LOGO.png';

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
      <Logo />
      PET{' '}
      <span className="material-symbols-outlined" style={{ fontSize: '1.6rem' }}>
        pets
      </span>{' '}
      SUPPLIES
    </h1>
  );
}

function Logo() {
  return (
    <div className={styles['image-case']}>
      <img className={styles['logo-image']} src={logo} alt="logo image"></img>
    </div>
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
      <ListPagesRecommend />
      <span
        className={`material-symbols-outlined ${styles['small-left-arrow']}`}
        style={{ fontSize: '2rem', transform: 'rotate(-180deg)' }}
      >
        play_circle
      </span>
      <span
        className={`material-symbols-outlined ${styles['small-right-arrow']}`}
        style={{ fontSize: '2rem' }}
      >
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

function Brands() {
  return <h2 className={styles.brands}>Brands</h2>;
}

function ListBrands() {
  return (
    <div className={styles['list-brands']}>
      <ListPagesBrands />
      <span
        className={`material-symbols-outlined ${styles['brand-left-arrow']}`}
        style={{ fontSize: '2rem', transform: 'rotate(-180deg)' }}
      >
        play_circle
      </span>
      <span
        className={`material-symbols-outlined ${styles['brand-right-arrow']}`}
        style={{ fontSize: '2rem' }}
      >
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
