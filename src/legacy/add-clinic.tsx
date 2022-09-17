// import { useEffect, useRef, useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// import { useRequest } from '../../custom-hooks/useRequest';
// import AddClinicForm from './add-clinic-form';
// import styles from './add-clinic.module.css';

// const AddClinic = () => {
//   // const navigate = useNavigate();
//   const sendRequest = useRequest();
//   const [clinicData, setClinicData] = useState({});
//   const nameInputRef = useRef<HTMLInputElement | null>(null);
//   const emailInputRef = useRef<HTMLInputElement | null>(null);
//   const phoneNumberInputRef = useRef<HTMLInputElement | null>(null);
//   const websiteInputRef = useRef<HTMLInputElement | null>(null);
//   const parentClinicRef = useRef<HTMLSelectElement | null>(null);
//   const streetInputRef = useRef<HTMLInputElement | null>(null);
//   const cityInputRef = useRef<HTMLInputElement | null>(null);
//   const postalCodeInputRef = useRef<HTMLInputElement | null>(null);
//   const countryInputRef = useRef<HTMLInputElement | null>(null);

//   const refs = {
//     nameInputRef,
//     emailInputRef,
//     phoneNumberInputRef,
//     websiteInputRef,
//     parentClinicRef,
//     streetInputRef,
//     cityInputRef,
//     postalCodeInputRef,
//     countryInputRef,
//   };

//   const formSubmissionHandler = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setClinicData({
//       name: nameInputRef.current?.value,
//       contact: {
//         email: emailInputRef.current?.value,
//         phoneNumber: phoneNumberInputRef.current?.value,
//         website: websiteInputRef.current?.value,
//       },
//       type: 'Clinic',
//       parentClinic: parentClinicRef.current?.value,
//       address: {
//         street: streetInputRef.current?.value,
//         city: cityInputRef.current?.value,
//         postalCode: postalCodeInputRef.current?.value,
//         country: countryInputRef.current?.value,
//       },
//     });
//     Object.values(refs).forEach((el) => {
//       if (el.current !== null) {
//         el.current.value = '';
//       }
//     });
//   };

//   useEffect(() => {
//     const addClinic = async () => {
//       await sendRequest({
//         method: 'POST',
//         body: clinicData,
//         endpoint: '/organizations',
//       });
//     };
//     if (Object.keys(clinicData).length !== 0) addClinic();
//   }, [clinicData, sendRequest]);

//   return (
//     <div className={styles.container}>
//       <AddClinicForm onSubmit={formSubmissionHandler} refs={refs} />;
//     </div>
//   );
// };

// export default AddClinic;
