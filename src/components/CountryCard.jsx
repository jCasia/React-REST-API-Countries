import styles from './styles/CountryCard.module.scss';
import dummyImg from '../assets/soon-img.png';

const CountryCard = ({ flagImg, country, population, region, capital }) => {
  return (
    <div className={styles['card-container']}>
      <div className={styles['flag-img-container']}>
        <img src={dummyImg} alt='dummy img' />
      </div>
      <div className={styles.wrapper}>
        <h2>Brazil</h2>
        <div className={styles['info-container']}>
          <p>
            Population: <span>206,135,893</span>
          </p>
          <p>
            Region: <span>Americas</span>
          </p>
          <p>
            Capital: <span>Brasilia</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;

// 530px 670px
