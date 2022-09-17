// import { Fragment, useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { useRequest } from '../../custom-hooks/useRequest';
// import { RootState } from '../../models';
// import { User } from '../../models/user';
// import { LoadingSpinner } from '../ui/loading-spinner';
// import styles from './all-users.module.css';
// import { UserItem } from './user-item';

// const AllUsers = () => {
//   const loggedUserRole = useSelector((state: RootState) => state.auth.role);
//   const sendRequest = useRequest();
//   const navigate = useNavigate();
//   const [usersData, setUsersData] = useState<User[]>([]);

//   useEffect(() => {
//     const fetchUsersData = async () => {
//       try {
//         const usersDataResponse: User[] = await sendRequest({
//           method: 'GET',
//           endpoint: '/users',
//         });
//         console.log(usersDataResponse);
//         setUsersData(usersDataResponse);
//       } catch (error: any) {
//         console.log(error.message);
//         if (error.message === 'No user Logged In') {
//           navigate('/signin');
//         }
//       }
//     };
//     fetchUsersData();
//   }, [sendRequest, navigate, loggedUserRole]);

//   return (
//     <Fragment>
//       <div className={styles.container}>
//         <h1 className={styles.heading}>List of All Users</h1>
//         <div className={styles.users_info}>
//           {usersData.length > 0 &&
//             usersData.map((user) => {
//               return <UserItem key={user._id} user={user} />;
//             })}
//           {usersData.length === 0 && (
//             <LoadingSpinner customMessage="Loading..." />
//           )}
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default AllUsers;
