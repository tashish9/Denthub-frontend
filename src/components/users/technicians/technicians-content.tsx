import { useEffect, useState } from 'react';
import { useRequest } from '../../../custom-hooks/useRequest';
import { Organization, User } from '../../../models';
import RenderUsers from '../page-content/render-users';

const TechniciansContent = () => {
  const sendRequest = useRequest();
  const [techniciansList, setTechniciansList] = useState<User[] | null>(null);
  const [labsList, setLabsList] = useState<Organization[] | null>(null);
  const [isNewUserAdded, setIsNewUserAdded] = useState(false);

  useEffect(() => {
    const getTechniciansList = async () => {
      try {
        const techniciansListResponse = await sendRequest({
          endpoint: '/users?type=TECHNICIAN',
          method: 'GET',
        });
        setTechniciansList(techniciansListResponse);
      } catch (error: any) {
        console.log(error.message, 'error during dentist list fetch');
      }
    };

    const getLabsList = async () => {
      try {
        const labsListResponse = await sendRequest({
          endpoint: '/organizations?type=Lab',
          method: 'GET',
        });
        setLabsList(labsListResponse);
      } catch (error: any) {
        console.log(error.message);
      }
    };

    getTechniciansList();
    getLabsList();
  }, [sendRequest, isNewUserAdded]);

  return (
    <RenderUsers
      heading="All Technicians"
      users={techniciansList}
      orgs={labsList}
      setIsNewUserAdded={setIsNewUserAdded}
    />
  );
};

export default TechniciansContent;
