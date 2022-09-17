import styles from './feature-item.module.css';

const FeatureItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Sample Heading</div>
      <div className={styles.description}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur ex
        voluptate modi nostrum consequuntur quis ducimus eveniet quae commodi
        itaque.
      </div>
    </div>
  );
};

export default FeatureItem;
