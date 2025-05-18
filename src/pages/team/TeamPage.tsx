import styles from './TeamPage.module.css';
import team from './components/ourTeam.png';
import team2 from './components/ourTeam2.png';
import team3 from './components/ourTeam3.png';
import team4 from './components/ourTeam4.png';
import team5 from './components/ourTeam5.png';

export function TeamPage() {
  return (
    <div className={styles['canvas-page']}>
      <h2 className={styles['team-title']}>Our friendly team of website developers</h2>
      <div className={styles['team-background']}>
        <img className={styles['team-img']} src={team} alt="team"></img>
        <img className={styles['team-img2']} src={team2} alt="team"></img>
        <img className={styles['team-img3']} src={team3} alt="team"></img>
        <img className={styles['team-img4']} src={team4} alt="team"></img>
        <img className={styles['team-img5']} src={team5} alt="team"></img>
      </div>
    </div>
  );
}
