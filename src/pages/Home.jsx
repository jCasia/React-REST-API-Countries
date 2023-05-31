import CountryCard from '../components/CountryCard';
import SearchForm from '../components/SearchForm';
import styles from './styles/Home.module.scss';

//map country card here
const Home = () => {
  return (
    <main className={styles.main}>
      <SearchForm />
      <div className={styles['cards-container']}>
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
      </div>
    </main>
  );
};

export default Home;
