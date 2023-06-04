import { useGlobalContext } from '../context';
import Dropdown from './Dropdown';
import styles from './styles/SearchForm.module.scss';
import { SlMagnifier } from 'react-icons/sl';

const SearchForm = () => {
  const { searchBarHandler } = useGlobalContext();

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <div className={styles['searchbar-container']}>
        {/* <label htmlFor='searchbar'>Seachbar</label> */}
        <SlMagnifier />
        <input
          type='text'
          onChange={searchBarHandler}
          name='searchbar'
          placeholder='Search for a country...'
        />
      </div>
      <Dropdown />
    </form>
  );
};

export default SearchForm;
