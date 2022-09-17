// import React, { useEffect, useState } from 'react';
// import { Organization, User } from '../../models';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../models';
// import styles from './add-clinic-form.module.css';
// import { useRequest } from '../../custom-hooks/useRequest';

// type Props = {
//   onSubmit: React.FormEventHandler<HTMLFormElement>;
//   refs: {
//     nameInputRef: React.RefObject<HTMLInputElement>;
//     emailInputRef: React.RefObject<HTMLInputElement>;
//     phoneNumberInputRef: React.RefObject<HTMLInputElement>;
//     websiteInputRef: React.RefObject<HTMLInputElement>;
//     streetInputRef: React.RefObject<HTMLInputElement>;
//     cityInputRef: React.RefObject<HTMLInputElement>;
//     postalCodeInputRef: React.RefObject<HTMLInputElement>;
//     countryInputRef: React.RefObject<HTMLInputElement>;
//     parentClinicRef: React.RefObject<HTMLSelectElement>;
//   };
// };

// const AddClinicForm = (props: Props) => {
//   const sendRequest = useRequest();
//   const { onSubmit, refs } = props;
//   const loggedUserRole = useSelector((state: RootState) => state.auth.role);
//   const [clinicsList, setClinicsList] = useState<Organization[]>([]);
//   const [loggedUserClinic, setLoggedUserClinic] = useState<Organization | null>(
//     null,
//   );

//   useEffect(() => {
//     const getAllClinics = async () => {
//       const clinicsListResponse = await sendRequest({
//         method: 'GET',
//         endpoint: `/organizations?type=Clinic`,
//       });
//       // console.log(clinicsListResponse);
//       setClinicsList(clinicsListResponse);
//     };

//     const getLoggedUserClinic = async () => {
//       const loggedUserInfoResponse: User = await sendRequest({
//         method: 'GET',
//         endpoint: '/current-user',
//       });
//       setLoggedUserClinic(loggedUserInfoResponse.organization);
//     };

//     if (loggedUserRole !== 'SUPER_ADMIN') getLoggedUserClinic();
//     getAllClinics();
//   }, [sendRequest , loggedUserRole]);

//   return (
//     <div className={styles.formContainer}>
//       <form className={styles.form} onSubmit={onSubmit}>
//         <h1 className={styles.heading}> Add a Clinic</h1>
//         <div className={styles.control}>
//           <label htmlFor="name">Name</label>
//           <input type="text" id="name" required ref={refs.nameInputRef} />
//         </div>
//         <fieldset className={styles.fieldset}>
//           <legend className={styles.legend}> Contact</legend>
//           <div className={styles.control}>
//             <label htmlFor="email">Email</label>
//             <input
//               type="text"
//               id="email"
//               required
//               ref={refs.emailInputRef}
//             ></input>
//           </div>
//           <div className={styles.control}>
//             <label htmlFor="phoneNumber">Phone Number</label>
//             <input
//               type="number"
//               id="phoneNumber"
//               ref={refs.phoneNumberInputRef}
//             ></input>
//           </div>
//           <div className={styles.control}>
//             <label htmlFor="website">Website</label>
//             <input type="text" id="website" ref={refs.websiteInputRef} />
//           </div>
//         </fieldset>
//         <fieldset className={styles.fieldset}>
//           <legend className={styles.legend}>Address</legend>
//           <div className={styles.control}>
//             <label htmlFor="street">Street</label>
//             <input type="text" id="street" ref={refs.streetInputRef}></input>
//           </div>
//           <div className={styles.control}>
//             <label htmlFor="city">City</label>
//             <input
//               type="text"
//               id="city"
//               required
//               ref={refs.cityInputRef}
//             ></input>
//           </div>
//           <div className={styles.control}>
//             <label htmlFor="postalCode">Postal Code</label>
//             <input
//               type="string"
//               id="postalCode"
//               required
//               ref={refs.postalCodeInputRef}
//             />
//           </div>
//           <div className={styles.control}>
//             <label htmlFor="country">Country</label>
//             <input
//               type="text"
//               id="country"
//               required
//               ref={refs.countryInputRef}
//             />
//           </div>
//         </fieldset>
//         <div className={styles.control}>
//           <label htmlFor="select-parent-clinic">Parent Clinic</label>
//           <select
//             name="Parent Clinic"
//             id="select-parent-clinic"
//             ref={refs.parentClinicRef}
//           >
//             {loggedUserRole === 'SUPER_ADMIN' && (
//               <option value="">--Please choose an option--</option>
//             )}

//             {loggedUserRole === 'SUPER_ADMIN' &&
//               clinicsList.map((el, idx) => {
//                 return (
//                   <option key={idx} value={el._id}>
//                     {el.name}
//                   </option>
//                 );
//               })}
//             {loggedUserRole === 'DENTIST_ADMIN' && (
//               <option value={loggedUserClinic?._id}>
//                 {loggedUserClinic?.name}
//               </option>
//             )}
//             {/* {organizationsList.map((el, idx) => {
//               console.log(el);
//               return (
//                 <option key={idx} value={el._id}>
//                   {el.name}
//                 </option>
//               );
//             })} */}
//           </select>
//         </div>

//         <div className={styles.actions}>
//           <button>Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddClinicForm;

// /*
//   organization number -> ?? // TODO add this to form
//   logoImage -> asking em to upload an image & we host it somewhere?
//                not storing images in db for sure // TODO aws s3 for 
//                // push to file system
// */
// // TODO joi
