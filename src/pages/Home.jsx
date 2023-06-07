import CountryCardContainer from '../components/CountryCardContainer';
import SearchForm from '../components/SearchForm';
import styles from './styles/Home.module.scss';

const Home = () => {
  return (
    <main className={styles.main}>
      <SearchForm />
      <CountryCardContainer />
    </main>
  );
};

export default Home;
