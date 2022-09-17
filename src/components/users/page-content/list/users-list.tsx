import { User } from '../../../../models';
import ListHeading from './list-heading';
import ListItem from './list-item';
import styles from './users-list.module.css';

type Props = {
  list: User[] | null;
  updateUserHandler: (userData: User) => void;
};

const UsersList = (props: Props) => {
  const { list, updateUserHandler } = props;
  return (
    <div className={styles.container}>
      <ListHeading />
      {list?.map((el) => {
        return (
          <ListItem
            key={el._id}
            data={el}
            updateUserHandler={updateUserHandler}
          />
        );
      })}
    </div>
  );
};

export default UsersList;
