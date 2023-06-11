import styles from './styles/BorderCountry.module.scss';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

// need to fetch using country code, border prop only shows country code
const urlCode = 'https://restcountries.com/v3.1/alpha/';

const BorderCountry = ({ border }) => {
  const [borders, setBorders] = useState([]);

  const { data } = useQuery({
    queryKey: ['borders', border],
    queryFn: async () => {
      try {
        const result = await axios.get(`${urlCode}${border}`);
        return result.data;
      } catch (error) {
        if (error.statusCode === 404) {
          console.log(error);
          return [];
        }
      }
    },
  });

  useEffect(() => {
    setBorders(data ?? []);
  }, [data]);

  return (
    <>
      {borders.map((border, index) => {
        const {
          name: { official: borderCountryName },
        } = border;
        return (
          <Link
            className={styles.bordersBtn}
            key={index}
            to={`/details/${borderCountryName}`}
          >
            <p>{borderCountryName}</p>
          </Link>
        );
      })}
    </>
  );
};

export default BorderCountry;
