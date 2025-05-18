import styles from './AboutPage.module.css';
import about from './components/aboutUs.png';

export function AboutUsPage() {
  return (
    <div className={styles['canvas-page']}>
      <h2 className={styles['about-title']}>About Us page coming soon”</h2>
      <div className={styles['about-background']}>
        <img className={styles['about-img']} src={about} alt="about"></img>
      </div>
    </div>
  );
}
