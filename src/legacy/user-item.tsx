// import { User } from '../../models/user';
// import styles from './user-item.module.css';
// import { useState, useEffect, Fragment } from 'react';
// import { Modal } from '../ui/modal';
// import { useRequest } from '../../custom-hooks/useRequest';

// const UserItem = ({ user }: { user: User }) => {
//   const [active, setActive] = useState<boolean | undefined>(undefined);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const sendRequest = useRequest();
//   const editButtonHandler = () => {
//     setIsModalOpen(true);
//   };

//   const activeToggleChangeHandler = (
//     e: React.ChangeEvent<HTMLInputElement>,
//   ) => {
//     setActive(!user.active);
//     user.active = !user.active;
//   };

//   useEffect(() => {
//     if (active === undefined) return;

//     console.log('trying to toggle user active status');

//     const toogleUserActiveStatus = async () => {
//       try {
//         console.log(user.username, user._id);
//         await sendRequest({
//           endpoint: `/users/${user._id}`,
//           method: 'PUT',
//           body: {
//             active: active,
//           },
//         });
//       } catch (error: any) {
//         console.log(error.message);
//       }
//     };
//     toogleUserActiveStatus();
//   }, [active, user._id, user.username, sendRequest]);

//   return (
//     <Fragment>
//       <div
//         className={`${styles.container} ${
//           user.active ? styles.active : styles.inactive
//         }`}
//       >
//         <h3 className={styles.name}>{user.username}</h3>
//         <div className={styles.info__field}>
//           <p className={styles.info_key}>User Type</p>
//           <p className={styles.info_value}>{user.type}</p>
//         </div>
//         <div className={styles.info__field}>
//           <p className={styles.info_key}>User Role</p>
//           <p className={styles.info_value}>{user.role}</p>
//         </div>
//         <div className={styles.info__field}>
//           <p className={styles.info_key}>Email</p>
//           <p className={styles.info_value}>{user.email}</p>
//         </div>
//         <div className={styles.info__field}>
//           <p className={styles.info_key}>Organization</p>
//           <p className={styles.info_value}>{user.organization?.name}</p>
//         </div>
//         <div className={styles.info__field}>
//           <p className={styles.info_key}>PhoneNumber</p>
//           <p className={styles.info_value}>{user.phoneNumber}</p>
//         </div>
//         <div className={styles.info__field}>
//           <p className={styles.info_key}>Created At</p>
//           <p className={styles.info_value}>
//             {
//               new Date(user.created.at)
//                 .toLocaleString('en-GB', { timeZone: 'IST' })
//                 .split(',')[0]
//             }
//           </p>
//         </div>
//         <div className={styles.actions}>
//           <button onClick={editButtonHandler}>Edit</button>
//           <div className={styles.toggle}>
//             <span
//               className={`${styles.toggle_inactive} ${styles.toggle_content}`}
//             >
//               Inactive
//             </span>
//             <label className={styles.switch}>
//               <input
//                 onChange={activeToggleChangeHandler}
//                 type="checkbox"
//                 checked={user.active}
//               />
//               <span className={`${styles.slider} ${styles.round}`}></span>
//             </label>
//             <span
//               className={`${styles.toggle_active} ${styles.toggle_content}`}
//             >
//               Active
//             </span>
//           </div>
//         </div>
//       </div>
//       {isModalOpen && (
//         <Modal
//           body={user}
//           setIsModalOpen={setIsModalOpen}
//           formAccessType="EDIT"
//         />
//       )}
//     </Fragment>
//   );
// };

// export { UserItem };
