import styles from './HomePage.module.css';
import { TitleMain } from './components/TitleMain';
import { MainBlock } from './components/MainBlock';
import { AsideBlock } from './components/AsideBlock';
import { Recommend } from './components/Recommend';
import { ListRecommend } from './components/ListRecommend';
import { Brands } from './components/Brands';
import { ListBrands } from './components/ListBrands';
import { useEffect } from 'react';

export function HomePage() {
  useEffect(() => {
    document.title = 'Home | Zoo Shop | Pet Supplies';
  }, []);
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
