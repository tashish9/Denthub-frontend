import { Fragment } from 'react';
import { Organization } from '../../../models';
import styles from './clinic-item.module.css';

type Props = {
  data: Organization;
  updateOrganizationHandler: (userData: Organization) => void;
};

const ClinicListItem = (props: Props) => {
  const { data, updateOrganizationHandler } = props;
  const loggedUserRole = localStorage.getItem('loggedUserRole');
  const isAdmin = loggedUserRole?.split('_')[1] === 'ADMIN';

  return (
    <Fragment>
      <div
        className={styles.container}
        onClick={
          isAdmin
            ? () => {
                updateOrganizationHandler(data);
              }
            : undefined
        }
      >
        <div className={styles.name}>{data.name}</div>
        <div className={styles.email}>{data.contact?.email}</div>
        <div className={styles.parentClinic}>
          {data.parentClinic ? data.parentClinic.name : '-'}
        </div>
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

export default ClinicListItem;
