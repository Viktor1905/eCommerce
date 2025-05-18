import styles from './Footer.module.css';
import { useNavigate } from 'react-router-dom';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-case']}>
        <OurShopsFooter />
        <HelpHomelessAnimals />
        <OurTelegramStickersFooter />
        <AboutUsFooter />
      </div>
    </footer>
  );
}

function AboutUsFooter() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => void navigate('/about')}
      className={`${styles.about} ${styles['about-link']}`}
    >
      ABOUT US
    </div>
  );
}

function OurShopsFooter() {
  return <div className={`${styles.shop} ${styles['shop-link']}`}>OUR SHOPS</div>;
}

function OurTelegramStickersFooter() {
  return <div className={`${styles.sticker} ${styles['sticker-link']}`}>Our Telegram Stickers</div>;
}

function HelpHomelessAnimals() {
  return <div className={`${styles.help} ${styles['help-link']}`}>Help Homeless Animals</div>;
}
