import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../models';
import styles from './pop-up.module.css';
import { popUpActions } from '../../../store/pop-up';

const PopUp = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(true);

  // const isPopUpOpen = useSelector(
  //   (state: RootState) => state.popup.isPopUpOpen,
  // );
  // const dispatch = useDispatch();

  // const closePopUp = () => {
  //   dispatch(popUpActions.open({}));
  // };

  return (
    <>
      {isPopUpOpen && (
        <div className={styles.container}>
          <div className={styles.descreption}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
            rerum. Sequi ea recusandae, ratione rem laboriosam nostrum voluptate
            qui sapiente.
          </div>
          <div className={styles.buttons}>
            <button className={styles.okay}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
// automatically hide after few secs
