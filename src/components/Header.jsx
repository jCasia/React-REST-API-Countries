import { BsSun, BsMoon } from 'react-icons/bs';
import styles from './styles/Header.module.scss';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';

const Header = () => {
  const { darkThemeToggle, darkTheme } = useGlobalContext();

  return (
    <header className={styles.header}>
      <Link to='/' className={styles.homelinkh1}>
        <h1>Where in the world?</h1>
      </Link>
      <button
        className={styles['dark-mode']}
        type='button'
        onClick={darkThemeToggle}
      >
        {darkTheme ? <BsSun /> : <BsMoon />}
        <p>{darkTheme ? 'Light Mode' : 'Dark Mode'}</p>
      </button>
    </header>
  );
};

export default Header;
