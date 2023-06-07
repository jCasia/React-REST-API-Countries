import { Link, useRouteError } from 'react-router-dom';
import styles from './styles/Error.module.scss';

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <div className={styles.error}>
        <div className={styles.wrapper}>
          <h1>
            Oh no! We can&apos;t seem to find the page you&apos;re looking for
          </h1>
          <p>
            Status: {error.status} {error.statusText}
          </p>

          <Link to='/' className={styles.linkHome}>
            &larr; Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.error}>
      <div className={styles.wrapper}>
        <h1>Oh no! There seems to be an Error...</h1>
        <Link to='/' className={styles.linkHome}>
          &larr; Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
