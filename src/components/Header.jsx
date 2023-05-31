import { BsSun, BsMoon } from 'react-icons/bs';
import styles from './styles/Header.module.scss';
import { useGlobalContext } from '../context';

const Header = () => {
  const { darkThemeToggle, isDarkTheme } = useGlobalContext();

  return (
    <header className={styles.header}>
      <h1>Where in the world?</h1>
      <button
        className={styles['dark-mode']}
        type='button'
        onClick={darkThemeToggle}
      >
        {isDarkTheme ? <BsSun /> : <BsMoon />}
        <p>{isDarkTheme ? 'Light Mode' : 'Dark Mode'}</p>
      </button>
    </header>
  );
};

export default Header;
