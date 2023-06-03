import styles from './styles/BorderCountry.module.scss';

//need props
const BorderCountry = () => {
  return (
    <button type='button' className={styles.borderBtn}>
      <p>France</p>
    </button>
  );
};

export default BorderCountry;
