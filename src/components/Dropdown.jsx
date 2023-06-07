import { useState } from 'react';
import styles from './styles/Dropdown.module.scss';
import { FiChevronDown } from 'react-icons/fi';
import { useGlobalContext } from '../context';

const options = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { setSelected, selected } = useGlobalContext();

  const selectHandler = (e) => {
    setSelected(e.target.textContent);
    setIsDropdownOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} type='submit'>
        {selected === '' ? 'Filter by Region' : `${selected}`}
        <FiChevronDown
          className={
            isDropdownOpen ? `${styles.arrow} ${styles.active}` : styles.arrow
          }
        />
      </button>
      <ul
        className={
          isDropdownOpen
            ? `${styles['options-list']} ${styles.expand}`
            : styles['options-list']
        }
      >
        {options.map((item, index) => {
          return (
            <li key={index} onClick={selectHandler} className={styles.option}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
