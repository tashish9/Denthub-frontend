// import styles from './add-user-form.module.css';
// import * as Yup from 'yup';
// import { useFormik } from 'formik';
// import { Organization, RootState, User } from '../../models';
// import { useSelector } from 'react-redux';
// import { Fragment, useEffect, useState } from 'react';
// import { useRequest } from '../../custom-hooks/useRequest';

// type Props = {
//   formAccessType?: string;
//   body?: User;
// };

// type submittedData = {
//   username: string;
//   email: string;
//   type: string;
//   role: string;
//   organization: string;
//   phoneNumber: string;
// };

// const AddUserForm = (props: Props): JSX.Element => {
//   const sendRequest = useRequest();
//   const { formAccessType, body } = props;
//   const loggedUserRole = useSelector((state: RootState) => state.auth.role);
//   const [organizationsList, setOrganizationsList] = useState<Organization[]>(
//     [] as Organization[],
//   );
//   const [submittedData, setSubmittedData] = useState<submittedData>();

//   const formik = useFormik({
//     initialValues: {
//       username: body?.username ? body.username : '',
//       email: body?.email ? body.email : '',
//       type: body?.type ? body.type : '',
//       role: body?.role ? body.role : '',
//       organization: body?.organization ? body.organization.name : '',
//       phoneNumber: body?.phoneNumber ? body.phoneNumber : '',
//     },
//     validationSchema: Yup.object({
//       username: Yup.string().required('This field is required'),
//       email: Yup.string()
//         .required('This field is required')
//         .email('Please enter valid email'),
//       type: Yup.string().required('This field is required'),
//       role: Yup.string().required('This field is required'),
//       phoneNumber: Yup.string()
//         .required('This field is required')
//         .max(10, 'Digits cannot exceed 10'),
//     }),
//     onSubmit: (values) => {
//       setSubmittedData(values);
//     },
//   });

//   const errors = formik.errors;
//   const touched = formik.touched;

//   // console.log(formik.values, errors);

//   useEffect(() => {
//     if (organizationsList.length > 0) return;
//     const getOrganizationsList = async () => {
//       const organizations: Organization[] = await sendRequest({
//         method: 'GET',
//         endpoint: '/organizations',
//       });
//       setOrganizationsList(organizations);
//     };
//     getOrganizationsList();
//   }, [sendRequest]);

//   useEffect(() => {
//     if (submittedData === undefined) return;
//     const updateUser = async () => {
//       await sendRequest({
//         method: 'PUT',
//         endpoint: `/users/${body?._id}`,
//         body: submittedData,
//       });
//     };

//     const addUser = async () => {
//       try {
//         await sendRequest({
//           method: 'POST',
//           endpoint: '/signup',
//           body: submittedData,
//         });
//       } catch (error: any) {
//         console.log(error.message);
//       }
//     };

//     if (formAccessType === 'EDIT') updateUser();
//     else {
//       addUser();
//     }
//   }, [submittedData, sendRequest]); // TODO move it inside onSubmit

//   return (
//     <div className={styles.container}>
//       <form onSubmit={formik.handleSubmit}>
//         {formAccessType ? (
//           <h1 className={styles.heading}>Edit User Form</h1>
//         ) : (
//           <h1 className={styles.heading}>Add User Form</h1>
//         )}
//         <div className={styles.controls}>
//           <label htmlFor="email">Email</label>
//           <input
//             type="text"
//             id="email"
//             value={formik.values.email}
//             onChange={formik.handleChange}
//             onBlur={() => {
//               formik.setFieldTouched('email');
//             }}
//           />
//         </div>
//         {touched.email && errors.email && (
//           <p className={styles.error}> {errors.email}</p>
//         )}
//         <div className={styles.controls}>
//           <label htmlFor="username">Name</label>
//           <input
//             type="text"
//             id="username"
//             value={formik.values.username}
//             onChange={formik.handleChange}
//             onBlur={() => {
//               formik.setFieldTouched('username');
//             }}
//           />
//           {touched.username && errors.username && (
//             <p className={styles.error}> {errors.username}</p>
//           )}
//         </div>
//         <div className={styles.controls}>
//           <label htmlFor="type">Type</label>
//           <select
//             name="Select User Type"
//             value={formik.values.type}
//             id="select-user-type"
//             onChange={(e) => {
//               formik.values.type = e.target.value;
//               formik.handleChange(e);
//             }}
//           >
//             <option value="">--Please choose user type--</option>
//             <option value="DENTIST">Dentist</option>
//             <option value="TECHNICIAN">Technician</option>
//           </select>
//           {touched.type && errors.type && (
//             <p className={styles.error}> {errors.type}</p>
//           )}
//         </div>
//         <div className={styles.controls}>
//           <label htmlFor="role">Role</label>
//           <select
//             name="Select User Role"
//             value={formik.values.role}
//             id="select-user-role"
//             onChange={(e) => {
//               formik.values.role = e.target.value;
//               formik.handleChange(e);
//             }}
//           >
//             <option value="">--Please choose a role--</option>
//             <option value="DENTIST_USER">Dentist User</option>
//             {loggedUserRole === 'SUPER_ADMIN' && (
//               <Fragment>
//                 <option value="DENTIST_ADMIN">Dentist Admin</option>
//                 <option value="TECHNICIAN_USER">Technician User</option>
//                 <option value="TECHNICIAN_ADMIN">Technician Admin</option>
//               </Fragment>
//             )}
//           </select>
//           {touched.role && errors.role && (
//             <p className={styles.error}> {errors.role}</p>
//           )}
//         </div>
//         <div className={styles.controls}>
//           <label htmlFor="organization">Organization</label>
//           <select
//             name="organization"
//             value={formik.values.organization}
//             id="organization"
//             onChange={(e) => {
//               formik.values.organization = e.target.value;
//               formik.handleChange(e);
//             }}
//           >
//             <option value="">--Please choose organization--</option>
//             {organizationsList.map((el, idx) => {
//               // console.log(el);
//               return (
//                 <option key={idx} value={el._id}>
//                   {el.name}
//                 </option>
//               );
//             })}
//           </select>
//           {touched.organization &&
//             errors.organization &&
//             formAccessType !== 'EDIT' && (
//               <p className={styles.error}> {errors.organization}</p>
//             )}
//         </div>
//         <div className={styles.controls}>
//           <label htmlFor="phoneNumber">PhoneNumber</label>
//           <input
//             type="text"
//             id="phoneNumber"
//             value={formik.values.phoneNumber}
//             onChange={formik.handleChange}
//             onBlur={() => {
//               formik.setFieldTouched('phoneNumber');
//             }}
//           />
//           {touched.phoneNumber &&
//             errors.phoneNumber &&
//             formAccessType !== 'EDIT' && (
//               <p className={styles.error}> {errors.phoneNumber}</p>
//             )}
//         </div>
//         <div className={styles.actions}>
//           <button
//             className={styles.submit_button}
//             type="submit"
//             disabled={body?.role === 'SUPER_ADMIN' ? true : false}
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export { AddUserForm };
