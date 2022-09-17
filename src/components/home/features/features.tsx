import FeatureItem from './feature-item';
import styles from './features.module.css';

const Features = () => {
  return (
    <div className={styles.container}>
      <FeatureItem />
      <FeatureItem />
      <FeatureItem />
      <FeatureItem />
      <FeatureItem />
      <FeatureItem />
    </div>
  );
};

export default Features;
