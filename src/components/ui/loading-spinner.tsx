import styles from './loading-spinner.module.css';

const LoadingSpinner = (props: { customMessage: string }) => {
  return (
    <div className={styles.container}>
      <p className={styles.loading}>{props.customMessage}</p>
      <div className={styles.spinner}></div>;
    </div>
  );
};

export { LoadingSpinner };
