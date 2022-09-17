import styles from './clinics-list-heading.module.css';

const data = {
  name: 'Name',
  email: 'Email',
  parentClinic: {
    name: 'Parent Clinic',
  },
  created: {
    at: 'Created-At',
  },
  active: 'Active',
};

const ClinicsListHeading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>{data.name}</div>
      <div className={styles.email}>{data.email}</div>
      <div className={styles.parentClinic}>{data.parentClinic.name}</div>
      <div className={styles.created}>{data.created.at}</div>
      <div className={styles.active}>{data.active}</div>
    </div>
  );
};

export default ClinicsListHeading;
