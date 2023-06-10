import styles from './styles/BorderCountry.module.scss';

//need props
const BorderCountry = ({ border }) => {
  return (
    <div className={styles.borders}>
      <p>{border}</p>
    </div>
  );
};

export default BorderCountry;
