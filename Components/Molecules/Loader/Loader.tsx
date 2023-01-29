import { useLoader } from './useLoader';
import styles from './Loader.module.css';

export const Loader = () => {
  const { isLoading } = useLoader();

  return (
    <>
      {isLoading && (
        <div className={styles.loaderWrapper}>
          <div className={styles.loader}>
            <div className={styles.loaderDot} />
            <div className={styles.loaderDot} />
            <div className={styles.loaderDot} />
            <div className={styles.loaderDot} />
            <div className={styles.loaderDot} />
          </div>
        </div>
      )}
    </>
  );
};
