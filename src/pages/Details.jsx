import styles from './styles/Details.module.scss';
import { useParams, Link } from 'react-router-dom';
import BorderCountry from '../components/BorderCountry';
import { BsArrowLeft } from 'react-icons/bs';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import LoadSpinner from '../components/LoadSpinner';

const url = 'https://restcountries.com/v3.1/name/';

const Details = () => {
  const { id } = useParams();

  const { data, isError, isLoading } = useQuery({
    queryKey: ['country', id],

    queryFn: async () => {
      try {
        const result = await axios.get(`${url}${id}`);
        return result.data;
      } catch (error) {
        if (error.statusCode === 404) {
          return [];
        }
      }
    },
  });

  if (isLoading) {
    return (
      <section className={styles.wrapper}>
        <LoadSpinner />
      </section>
    );
  }

  if (isError) {
    return (
      <section className={styles.wrapper}>
        <h1>Something went wrong....</h1>
      </section>
    );
  }

  const {
    name: { common: countryName, nativeName },
    flags: { svg: countryImg, alt },
    population,
    region,
    subregion,
    capital,
    tld,
    borders,
    currencies,
    languages,
  } = data[0];

  //Deeply nested, convert object into an array
  const newCurrency = Object.values(currencies)[0].name;
  const newNativeName = Object.values(nativeName)[0].common;
  const newLanguage = Object.values(languages).join(', ');
  //

  const populationFixed = population.toLocaleString('en', {
    useGrouping: true,
  });

  return (
    <section className={styles.details}>
      <Link to='/' className={styles['back-btn']}>
        <BsArrowLeft />
        Back
      </Link>
      <div className={styles['details-card-container']}>
        <img src={countryImg} alt={alt} />

        <div className={styles['details-wrapper']}>
          <h1>{countryName}</h1>
          <div className={styles['top-details']}>
            <p>
              Native name: <span>{newNativeName}</span>
            </p>
            <p>
              Population: <span>{populationFixed}</span>
            </p>
            <p>
              Region: <span>{region}</span>
            </p>
            <p>
              Sub Region: <span>{subregion}</span>
            </p>
            <p>
              Capital: <span>{capital}</span>
            </p>
          </div>
          <div className={styles['bottom-details']}>
            <p>
              Top Level Domain: <span>{tld}</span>
            </p>
            <p>
              Currencies: <span>{newCurrency}</span>
            </p>
            <p>
              Language(s): <span>{newLanguage}</span>
            </p>
          </div>
          <div className={styles['border-countries-container']}>
            <h2>Border Countries:</h2>
            <div className={styles['border-countries']}>
              {/* check if borders exist */}
              {borders?.map((border, index) => {
                return <BorderCountry border={border} key={index} />;
              }) ?? (
                <p style={{ fontSize: '1.25rem' }}>No Bordering Countries</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
