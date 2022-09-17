import { Organization, User } from '../../../models';
import UsersList from './list/users-list';
import styles from './render-users.module.css';
import { useState } from 'react';
import AddUserFormV2 from '../add-user-form/add-user-form';

type Props = {
  users: User[] | null;
  heading: string;
  orgs: Organization[] | null;
  setIsNewUserAdded: React.Dispatch<React.SetStateAction<boolean>>;
};

const RenderUsers = (props: Props) => {
  const { users, heading, orgs  , setIsNewUserAdded} = props;
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [usersData, setUsersData] = useState<User | null>(null);
  const loggedUserRole = localStorage.getItem('loggedUserRole');
  const isAdmin = loggedUserRole?.split('_')[1] === 'ADMIN';

  const addUserHandler = () => {
    setUsersData(null);
    setIsFormOpen(true);
  };

  const updateUserHandler = (userData: User) => {
    setUsersData(userData);
    setIsFormOpen(true);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading_bar}>
          <h1 className={styles.title}>{heading}</h1>
          {isAdmin && (
            <button onClick={addUserHandler} className={styles.button}>
              Add User
            </button>
          )}
        </div>
        <UsersList list={users} updateUserHandler={updateUserHandler} />
      </div>
      {isFormOpen && (
        <AddUserFormV2
          setIsFormOpen={setIsFormOpen}
          setIsNewUserAdded={setIsNewUserAdded}
          type={users !== null ? users[0].role.split('_')[0] : ''}
          usersData={usersData}
          orgs={orgs}
        />
      )}
    </>
  );
};

export default RenderUsers;
