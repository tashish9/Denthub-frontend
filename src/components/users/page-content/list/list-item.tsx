import { Fragment } from 'react';
import { User } from '../../../../models';
import styles from './list-item.module.css';

type Props = {
  data: User;
  updateUserHandler: (userData: User) => void;
};

const ListItem = (props: Props) => {
  const { data, updateUserHandler } = props;
  const loggedUserRole = localStorage.getItem('loggedUserRole');
  const isAdmin = loggedUserRole?.split('_')[1] === 'ADMIN';

  return (
    <Fragment>
      <div
        className={styles.container}
        onClick={
          isAdmin
            ? () => {
                updateUserHandler(data);
              }
            : undefined
        }
      >
        <div className={styles.name}>{data.username}</div>
        <div className={styles.email}>{data.email}</div>
        <div className={styles.role}>
          {data.role
            .split('_')
            .reduce((acc, el) => {
              return (
                acc + el[0].toUpperCase() + el.slice(1).toLowerCase() + ' '
              );
            }, '')
            .trim()}
        </div>
        <div className={styles.organization}>{data.organization.name}</div>
        <div className={styles.created}>
          {
            new Date(data.created.at)
              .toLocaleString('en-GB', { timeZone: 'IST' })
              .split(',')[0]
          }
        </div>
        <div className={styles.active_status}>
          <div
            className={`${styles.circle} ${data.active && styles.active}`}
          ></div>
        </div>
      </div>
    </Fragment>
  );
};

export default ListItem;
