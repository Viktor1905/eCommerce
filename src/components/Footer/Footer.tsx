import styles from './Footer.module.css';

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
  return (
    <button className={`${styles.about} ${styles['about-link']}`} type="button">
      ABOUT US
    </button>
  );
}

function OurShopsFooter() {
  return (
    <button className={`${styles.shop} ${styles['shop-link']}`} type="button">
      OUR SHOPS
    </button>
  );
}

function OurTelegramStickersFooter() {
  return (
    <button className={`${styles.sticker} ${styles['sticker-link']}`} type="button">
      Our Telegram Stickers
    </button>
  );
}

function HelpHomelessAnimals() {
  return (
    <button className={`${styles.help} ${styles['help-link']}`} type="button">
      Help Homeless Animals
    </button>
  );
}
