import { useGlobalContext } from '../context';
import Dropdown from './Dropdown';
import styles from './styles/SearchForm.module.scss';
import { SlMagnifier } from 'react-icons/sl';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  const searchbarHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const enterHandler = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };
  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <div className={styles['searchbar-container']}>
        <SlMagnifier />
        <input
          type='text'
          onChange={searchbarHandler}
          name='searchbar'
          placeholder='Search for a country...'
          onKeyDown={enterHandler}
          autoComplete='off'
        />
      </div>
      <Dropdown />
    </form>
  );
};

export default SearchForm;
