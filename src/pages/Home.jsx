import CountryCardContainer from '../components/CountryCardContainer';
import ScrollTopButton from '../components/ScrollTopButton';
import SearchForm from '../components/SearchForm';
import styles from './styles/Home.module.scss';

const Home = () => {
  return (
    <main className={styles.main}>
      <SearchForm />
      <CountryCardContainer />
      <ScrollTopButton />
    </main>
  );
};

export default Home;
