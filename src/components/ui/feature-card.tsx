import styles from './feature-card.module.css';

const FeatureCard = (props: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.feature__heading}>{props.title}</div>
      <div className={styles.feature__descreption}>{props.descreption}</div>
    </div>
  );
};

export { FeatureCard };
