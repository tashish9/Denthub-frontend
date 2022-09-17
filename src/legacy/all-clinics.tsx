// import { useEffect, useState } from 'react';
// import { useRequest } from '../../custom-hooks/useRequest';
// import { Organization } from '../../models';
// import { LoadingSpinner } from '../ui/loading-spinner';
// import styles from './all-clinics.module.css';
// import ClinicItem from './clinic-item';

// const AllClinics = () => {
//   const [clinicsList, setClinicsList] = useState<Organization[]>([]);
//   const sendRequest = useRequest();
//   useEffect(() => {
//     const getAllClinics = async () => {
//       const clinicsListResponse = await sendRequest({
//         method: 'GET',
//         endpoint: `/organizations?type=Clinic`,
//       });
//       console.log(clinicsListResponse);
//       setClinicsList(clinicsListResponse);
//     };

//     getAllClinics();
//   }, [sendRequest]);

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.heading}>List of All Clinics</h1>
//       <div className={styles.clinics_info}>
//         {clinicsList.length > 0 &&
//           clinicsList.map((el) => {
//             return <ClinicItem key={el._id} clinic={el} />;
//           })}
//         {clinicsList.length === 0 && (
//           <LoadingSpinner customMessage="Loading..." />
//         )}
//       </div>
//     </div>
//   );
// };

// export default AllClinics;
