// import ReactDOM from 'react-dom';
// import styles from './modal.module.css';
// import { AddUserForm } from '../../legacy/add-user-form/add-user-form';
// import { User } from '../../models';
// import React from 'react';

// type Props = {
//   body: User;
//   setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   formAccessType: string;
// };

// const Modal = (props: Props) => {
//   const cancelButtonHandler = () => {
//     props.setIsModalOpen(false);
//   };

//   return (
//     <React.Fragment>
//       {ReactDOM.createPortal(
//         <div className={styles.container}>
//           <div className={styles.modal__top_button}>
//             <button
//               className={styles.cross_button}
//               onClick={cancelButtonHandler}
//             >
//               X
//             </button>
//           </div>
//           <div className={styles.modal__body}>
//             <AddUserForm
//               formAccessType={props.formAccessType}
//               body={props.body}
//             />
//           </div>
//         </div>,
//         document.getElementById('modal')!,
//       )}
//     </React.Fragment>
//   );
// };

// export { Modal };
