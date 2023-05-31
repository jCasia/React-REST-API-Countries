import { useGlobalContext } from '../context';
import styles from './styles/SearchForm.module.scss';
import { SlMagnifier } from 'react-icons/sl';

const SearchForm = () => {
  const { searchBarHandler } = useGlobalContext();

  return (
    <form className={styles.form}>
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
      <div className={styles['dropdown-container']}>
        <select name='region' id='region'>
          <option>Test 1</option>
          <option>Test 2</option>
          <option>Test 3</option>
          <option>Test 4</option>
        </select>
      </div>
    </form>
  );
};

export default SearchForm;
