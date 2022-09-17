import styles from './list-heading.module.css';
const data = {
  username: 'Name',
  email: 'Email',
  role: 'Role',
  organization: {
    name: 'Organization',
  },
  created: {
    at: 'Created-At',
  },
  active: 'Active',
};

const ListHeading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>{data.username}</div>
      <div className={styles.email}>{data.email}</div>
      <div className={styles.role}>
        {data.role
          .split('_')
          .reduce((acc, el) => {
            return acc + el[0].toUpperCase() + el.slice(1).toLowerCase() + ' ';
          }, '')
          .trim()}
      </div>
      <div className={styles.organization}>{data.organization.name}</div>
      <div className={styles.created}>{data.created.at}</div>
      <div className={styles.active}>{data.active}</div>
    </div>
  );
};

export default ListHeading;
