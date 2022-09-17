import { useState } from 'react';

const usePopUp = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  return [isPopUpOpen, setIsPopUpOpen];
  // return (
  //   <>
  //     {isPopUpOpen && (
  //       <div className={styles.container}>
  //         <div className={styles.descreption}>
  //           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
  //           rerum. Sequi ea recusandae, ratione rem laboriosam nostrum voluptate
  //           qui sapiente.
  //         </div>
  //         <div className={styles.buttons}>
  //           <button className={styles.okay}>OK</button>
  //         </div>
  //       </div>
  //     )}
  //   </>
  // );
};

export default usePopUp;
