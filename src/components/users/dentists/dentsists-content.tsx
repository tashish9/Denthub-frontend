import { useEffect, useState } from 'react';
import { useRequest } from '../../../custom-hooks/useRequest';
import { Organization, User } from '../../../models';
import RenderUsers from '../page-content/render-users';

const DentistsContent = () => {
  const sendRequest = useRequest();
  const [dentistsList, setDentistsList] = useState<User[] | null>(null);
  const [clinicsList, setClinicsList] = useState<Organization[] | null>(null);
  const [isNewUserAdded, setIsNewUserAdded] = useState(false);

  useEffect(() => {
    const getDentistsList = async () => {
      try {
        const dentistsListResponse = await sendRequest({
          endpoint: '/users?type=DENTIST',
          method: 'GET',
        });
        setDentistsList(dentistsListResponse);
      } catch (error: any) {
        console.log(error.message, 'error during dentist list fetch');
      }
    };

    const getClinicsList = async () => {
      try {
        const clinicsListResponse = await sendRequest({
          endpoint: '/organizations?type=Clinic',
          method: 'GET',
        });
        setClinicsList(clinicsListResponse);
      } catch (error: any) {
        console.log(error.message);
      }
    };
    getClinicsList();
    getDentistsList();
  }, [sendRequest , isNewUserAdded]);

  return (
    <RenderUsers
      heading="All Dentists"
      users={dentistsList}
      orgs={clinicsList}
      setIsNewUserAdded =  {setIsNewUserAdded}
    />
  );
};

export default DentistsContent;
