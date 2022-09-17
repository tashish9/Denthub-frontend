// import { useEffect, useState } from 'react';
// import { User } from '../../models';
// import { useRequest } from '../../custom-hooks/useRequest';
// import styles from './current-user-info.module.css';

// const CurrentUserInfo = () => {
//   const [loggedUserInfo, setLoggedUserInfo] = useState<User | null>(null);
//   const sendRequest = useRequest();
//   useEffect(() => {
//     if (loggedUserInfo) return;
//     const getLoggedUserInfo = async () => {
//       try {
//         const loggedUserInfoResponse = await sendRequest({
//           method: 'GET',
//           endpoint: '/current-user',
//         });
//         setLoggedUserInfo(loggedUserInfoResponse);
//       } catch (error: any) {
//         console.log(error.message);
//       }
//     };
//     getLoggedUserInfo();
//   }, [loggedUserInfo, sendRequest]);

//   return (
//     <div className={styles.container}>
//       <h1>LoggedIn User Info </h1>
//       {JSON.stringify(loggedUserInfo)}
//     </div>
//   );
// };

// export default CurrentUserInfo;
