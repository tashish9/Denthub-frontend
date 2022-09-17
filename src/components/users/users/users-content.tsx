import { useEffect, useState } from 'react';
import { useRequest } from '../../../custom-hooks/useRequest';
import { Organization, User } from '../../../models';
import RenderUsers from '../page-content/render-users';

const UsersContent = () => {
  const sendRequest = useRequest();
  const [usersList, setUsersList] = useState<User[] | null>(null);
  const [organizationsList, setOrganizationsList] = useState<
    Organization[] | null
  >(null); // purpose -> use during add/update user
  const loggedUserRole = localStorage.getItem('loggedUserRole');
  const isAdmin = loggedUserRole?.split('_')[1] === 'ADMIN';
  const [isNewUserAdded, setIsNewUserAdded] = useState(false);

  useEffect(() => {
    const getUsersList = async () => {
      try {
        const usersListResponse = await sendRequest({
          endpoint: '/users',
          method: 'GET',
        });
        setUsersList(usersListResponse);
      } catch (error: any) {
        console.log(error.message, 'error during dentist list fetch');
      }
    };

    const getOrganizationsList = async () => {
      try {
        const organizationsListResponse = await sendRequest({
          endpoint: '/organizations',
          method: 'GET',
        });
        setOrganizationsList(organizationsListResponse);
      } catch (error: any) {
        console.log(error.message);
      }
    };

    getUsersList();
    isAdmin && getOrganizationsList();
  }, [sendRequest, isNewUserAdded]);

  return (
    <RenderUsers
      heading="Users List"
      users={usersList}
      orgs={organizationsList}
      setIsNewUserAdded={setIsNewUserAdded}
    />
  );
};

export default UsersContent;
