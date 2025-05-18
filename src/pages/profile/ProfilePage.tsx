import styles from './ProfilePage.module.css';
import profile from './components/corgiPaint.png';
import { useEffect } from 'react';

export function ProfilePage() {
  useEffect(() => {
    document.title = 'Profile | Zoo Shop | Pet Supplies';
  }, []);
  return (
    <div className={styles['canvas-page']}>
      <h2 className={styles['profile-title']}>Profile page coming soon”</h2>
      <div className={styles['profile-background']}>
        <img className={styles['profile-img']} src={profile} alt="profile"></img>
      </div>
    </div>
  );
}
