import styles from './styles/Details.module.scss';
import dummyImg from '../assets/soon-img.png';
import { Link } from 'react-router-dom';
import BorderCountry from '../components/BorderCountry';
import { BsArrowLeft } from 'react-icons/bs';

const Details = () => {
  return (
    <section className={styles.details}>
      <Link to='/' className={styles['back-btn']}>
        <BsArrowLeft />
        Back
      </Link>

      <div className={styles['details-card-container']}>
        <div className={styles['img-wrapper']}>
          <img src={dummyImg} alt='img' />
        </div>
        <div className={styles['details-wrapper']}>
          <h1>Belgium</h1>
          <div className={styles['top-details']}>
            <p>
              Native name: <span>Belgie</span>
            </p>
            <p>
              Population: <span>Belgie</span>
            </p>
            <p>
              Region: <span>Belgie</span>
            </p>
            <p>
              Sub Region: <span>Belgie</span>
            </p>
            <p>
              Capital: <span>Belgie</span>
            </p>
          </div>
          <div className={styles['bottom-details']}>
            <p>
              Top Level Domain: <span>Belgie</span>
            </p>
            <p>
              Currencies: <span>Belgie</span>
            </p>
            <p>
              Languages: <span>Belgie</span>
            </p>
          </div>
          <div className={styles['border-countries-container']}>
            <h2>Border Countries:</h2>
            <div className={styles['border-countries']}>
              <BorderCountry />
              <BorderCountry />
              <BorderCountry />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
