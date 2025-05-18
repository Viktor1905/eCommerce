import styles from './ProfilePage.module.css';
import profile from './components/corgiPaint.png';

export function ProfilePage() {
  return (
    <div className={styles['canvas-page']}>
      <h2 className={styles['profile-title']}>Profile page coming soon”</h2>
      <div className={styles['profile-background']}>
        <img className={styles['profile-img']} src={profile} alt="profile"></img>
      </div>
    </div>
  );
}
