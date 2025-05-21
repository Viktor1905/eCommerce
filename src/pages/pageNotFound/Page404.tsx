import notFoundImage from './assets/image/pageNotFound.png';
import styles from './Page404.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function NotFoundPage() {
  useEffect(() => {
    document.title = '404 | Zoo Shop | Pet Supplies';
  }, []);
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
