// import { Fragment } from 'react';
// import { Organization } from '../../models';
// import styles from './clinic-item.module.css';

// const ClinicItem = ({ clinic }: { clinic: Organization }) => {
//   const editButtonHandler = () => {};
//   console.log(clinic, 'recieved clinic');

//   return (
//     <Fragment>
//       <div
//         className={`${styles.container} ${
//           clinic.active ? styles.active : styles.inactive
//         }`}
//       >
//         <h3 className={styles.name}>{clinic.name}</h3>
//         <div className={styles.info__field}>
//           <p className={styles.info_key}>Clinic number</p>
//           <p className={styles.info_value}>{clinic.OrganizationNumber}</p>
//         </div>
//         <div className={styles.info__field}>
//           <p className={styles.info_key}>Email</p>
//           <p className={styles.info_value}>{clinic.contact.email}</p>
//         </div>
//         <div className={styles.info__field}>
//           <p className={styles.info_key}>Website</p>
//           <p className={styles.info_value}>{clinic.contact.website}</p>
//         </div>
//         <div className={styles.info__field}>
//           <p className={styles.info_key}>Phone Number </p>
//           <p className={styles.info_value}>{clinic.contact.phoneNumber}</p>
//         </div>
//         <div className={styles.info__field}>
//           <p className={styles.info_key}>Parent Clinic</p>
//           <p className={styles.info_value}>{clinic.parentClinic?.name}</p>
//         </div>
//         <div className={styles.info__field}>
//           <p className={styles.info_key}>Created At</p>
//           <p className={styles.info_value}>
//             {
//               new Date(clinic.created.at)
//                 .toLocaleString('en-GB', { timeZone: 'IST' })
//                 .split(',')[0]
//             }
//           </p>
//         </div>
//         <div className={styles.actions}>
//           <button onClick={editButtonHandler}>Edit</button>
//           {/* <div className={styles.toggle}>
//             <span
//               className={`${styles.toggle_inactive} ${styles.toggle_content}`}
//             >
//               Inactive
//             </span>
//             <label className={styles.switch}>
//               <input
//                 onChange={activeToggleChangeHandler}
//                 type="checkbox"
//                 checked={clinic.active}
//               />
//               <span className={`${styles.slider} ${styles.round}`}></span>
//             </label>
//             <span
//               className={`${styles.toggle_active} ${styles.toggle_content}`}
//             >
//               Active
//             </span>
//           </div> */}
//         </div>
//       </div>
//       {/* {isModalOpen && (
//         <Modal
//           body={clinic}
//           setIsModalOpen={setIsModalOpen}
//           formAccessType="EDIT"
//         />
//       )} */}
//     </Fragment>
//   );
// };

// export default ClinicItem;
