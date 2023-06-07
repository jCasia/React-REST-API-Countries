import styles from './styles/CountryCardContainer.module.scss';
import CountryCard from './CountryCard';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useGlobalContext } from '../context';

const url = 'https://restcountries.com/v3.1/name/';

const CountryCardContainer = () => {
  const { searchTerm, selected } = useGlobalContext();

  const response = useQuery({
    //caches results in string key (countries), only if value changes, then useQuery refetches the results
    queryKey: ['countries', searchTerm || 'b'],
    queryFn: async () => {
      try {
        const result = await axios.get(`${url}${searchTerm}`);
        return result.data;
      } catch (error) {
        if (error.statusCode === 404) {
          return [];
        }
      }
    },
    enabled: searchTerm.length > 0,
  });

  if (response.isLoading) {
    return (
      <section className={styles.wrapper}>
        <h1>Loading....</h1>
      </section>
    );
  }

  if (response.isError) {
    return (
      <section className={styles.wrapper}>
        <h1>No results found....</h1>
      </section>
    );
  }

  const results = response.data;
  const filteredResultsRegion = results.filter(
    (region) => region.region === selected
  );

  return (
    <div className={styles['cards-container']}>
      {results.map((country) => {
        return <CountryCard country={country} key={country.name.common} />;
      })}
    </div>
  );
};

export default CountryCardContainer;
