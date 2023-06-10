import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styles from './styles/ScrollTopButton.module.scss';

const ScrollTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollFunction = () => {
    if (window.scrollY > 500) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollUpHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollFunction);
  }, []);

  return (
    <button
      className={
        showButton
          ? `${styles['scroll-top-btn']} ${styles.show}`
          : styles['scroll-top-btn']
      }
      onClick={scrollUpHandler}
    >
      <FaArrowUp className={styles.arrow} />
    </button>
  );
};

export default ScrollTopButton;
