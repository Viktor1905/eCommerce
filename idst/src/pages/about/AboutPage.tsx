import styles from './AboutPage.module.css';
import about from './components/aboutUs.png';
import { useEffect } from 'react';

export function AboutUsPage() {
  useEffect(() => {
    document.title = 'About Us | Zoo Shop | Pet Supplies';
  }, []);
  return (
    <div className={styles['canvas-page']}>
      <h2 className={styles['about-title']}>About Us page coming soon”</h2>
      <div className={styles['about-background']}>
        <img className={styles['about-img']} src={about} alt="about"></img>
      </div>
    </div>
  );
}
