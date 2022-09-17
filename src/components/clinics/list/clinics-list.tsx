import { Organization } from '../../../models';
import styles from './clinics-list.module.css';
import ClinicListItem from './clinic-item';
import ClinicsListHeading from './clinics-list-heading';

type Props = {
  list: Organization[] | null;
  updateOrganizationHandler: (userData: Organization) => void;
};

const ClinicsList = (props: Props) => {
  const { list, updateOrganizationHandler } = props;
  return (
    <div className={styles.container}>
      <ClinicsListHeading />
      {list?.map((el) => {
        return (
          <ClinicListItem
            key={el._id}
            data={el}
            updateOrganizationHandler={updateOrganizationHandler}
          />
        );
      })}
    </div>
  );
};

export default ClinicsList;
