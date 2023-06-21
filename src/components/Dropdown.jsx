import { useEffect, useState } from 'react';
import styles from './styles/Dropdown.module.scss';
import { FiChevronDown } from 'react-icons/fi';
import { useGlobalContext } from '../context';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const options = [
  'Africa',
  'Americas',
  'Asia',
  'Europe',
  'Oceania',
  'Antarctic',
];

const url = 'https://restcountries.com/v3.1/region/';

const Dropdown = ({ elementRef }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { setSelected, selected, setFetchedData } = useGlobalContext();

  const selectHandler = (e) => {
    const value = e.target.textContent;
    setSelected(value);
    elementRef.current.value = '';
    setIsDropdownOpen(false);
  };

  const { data } = useQuery({
    queryKey: ['filterRegion', selected],
    queryFn: async () => {
      try {
        const result = await axios.get(`${url}${selected}`);
        return result.data;
      } catch (error) {
        if (error.statusCode === 404) {
          console.log(error);
          return [];
        }
      }
    },
    enabled: selected.length > 0,
  });

  useEffect(() => {
    setFetchedData(data ?? []);
  }, [data]);

  return (
    <div className={styles.dropdown}>
      <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} type='submit'>
        {selected ? `${selected}` : 'Filter By Region'}
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
        {options.sort().map((item, index) => {
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
