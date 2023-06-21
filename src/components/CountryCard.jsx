import { Link } from 'react-router-dom';
import styles from './styles/CountryCard.module.scss';

const CountryCard = ({ country }) => {
  const {
    name: { common: countryName, official: officialName },
    flags: { svg: countryImg, alt },
    population,
    region,
    capital,
  } = country;

  const populationFixed = population.toLocaleString('en', {
    useGrouping: true,
  });

  return (
    <Link to={`/details/${officialName}`} className={styles.cards}>
      <div className={styles['card-container']}>
        <img src={countryImg} alt={alt ? alt : `A flag of ${countryName}`} />

        <div className={styles.wrapper}>
          <h2>{countryName}</h2>
          <div className={styles['info-container']}>
            <p>
              Population: <span>{populationFixed}</span>
            </p>
            <p>
              Region: <span>{region}</span>
            </p>
            <p>
              Capital: <span>{capital ? capital : 'N/A'}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
