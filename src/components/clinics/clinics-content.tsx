import styles from './clinics-content.module.css';
import { useEffect, useState } from 'react';
import { Organization } from '../../models';
import { useRequest } from '../../custom-hooks/useRequest';
import ClinicsList from './list/clinics-list';
import AddClinicForm from './add-clinic-form/add-clinic-form';

const ClinicsContent = () => {
  const [clinicsList, setClinicsList] = useState<Organization[] | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [clinicData, setClinicData] = useState<Organization | null>(null);
  const sendRequest = useRequest();
  const loggedUserRole = localStorage.getItem('loggedUserRole');
  const isTechnician = loggedUserRole?.split('_')[0] === 'TECHNICIAN';
  const isAdmin = loggedUserRole?.split('_')[1] === 'ADMIN';

  const updateClinicHandler = (clinic: Organization) => {
    setIsFormOpen(true);
    setClinicData(clinic);
  };

  const addClinicHandler = () => {
    setClinicData(null);
    setIsFormOpen(true);
  };

  useEffect(() => {
    const getClinisList = async () => {
      try {
        const clinicsListResponse = await sendRequest({
          endpoint:
            loggedUserRole === 'SUPER_ADMIN'
              ? '/organizations?type=Clinic'
              : '/organizations',
          method: 'GET',
        });

        setClinicsList(clinicsListResponse);
      } catch (error: any) {
        console.log(error.message);
      }
    };

    getClinisList();
  }, [sendRequest, loggedUserRole]);

  return (
    <>
      {isTechnician ? (
        <>List of all connected Clinics</>
      ) : (
        <>
          <div className={styles.container}>
            <div className={styles.heading_bar}>
              <h1 className={styles.title}>Clinics List</h1>
              {isAdmin && (
                <button className={styles.button} onClick={addClinicHandler}>
                  Add Clinic
                </button>
              )}
            </div>
            <ClinicsList
              list={clinicsList}
              updateOrganizationHandler={updateClinicHandler}
            />
          </div>
          {isFormOpen && (
            <AddClinicForm
              setIsFormOpen={setIsFormOpen}
              clinicData={clinicData}
              parentClinics={clinicsList}
              type="Clinic"
            />
          )}
        </>
      )}
    </>
  );
};

export default ClinicsContent;
