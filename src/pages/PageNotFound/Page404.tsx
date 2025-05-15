import notFoundImage from './assets/image/pageNotFound.png';
import styles from './Page404.module.css';
import { useNavigate } from 'react-router-dom';

export function NotFoundPage() {
  const navigate = useNavigate();
  function handleClick(): void {
    void navigate('/');
  }
  return (
    <main className={styles.main}>
      <div className={styles['main-wrapper-404']}>
        <button onClick={handleClick} className={styles['back-home-button']}>
          Back Home
        </button>
        <img
          className={styles['not-found-pages']}
          src={notFoundImage}
          alt="404 Page Not Found"
        ></img>
      </div>
    </main>
  );
}
