import styles from './add-user-form.module.css';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  FormikSelectInput,
  FormikTextInput,
} from '../../../services/formik-input';
import { useRequest } from '../../../custom-hooks/useRequest';
import { Organization, User } from '../../../models';

type Props = {
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsNewUserAdded: React.Dispatch<React.SetStateAction<boolean>> | null;
  usersData: User | null;
  type: string;
  orgs: Organization[] | null;
};

const AddUserFormV2 = (props: Props) => {
  const { setIsFormOpen, usersData, orgs, setIsNewUserAdded } = props;
  let { type } = props;
  type = type[0] + type.slice(1).toLowerCase();
  const loggedUserRole = localStorage.getItem('loggedUserRole');

  const sendRequest = useRequest();

  const cancelButtonHandler = () => {
    setIsFormOpen(false);
  };

  return (
    <div className={styles.container}>
      <Formik
        initialValues={
          usersData
            ? {
                ...usersData,
                organization: usersData.organization._id,
              }
            : {
                username: '', // string
                email: '', // string
                role: '', // dropdown
                organization: '', // dropdown
                phoneNumber: '', // numb
              }
        }
        validationSchema={Yup.object({
          email: Yup.string().email().required('Email is a required field'),
          username: Yup.string().required('username is a required field'),
          organization: Yup.string().required('Please choose an Organization'),
          role: Yup.string().required('Choose a Role'),
          phoneNumber: Yup.number()
            .required('Please enter Phone Number')
            .max(9999999999, 'Please add a valid phone number'),
        })}
        onSubmit={async (values) => {
          console.log(values);
          const addUser = async () => {
            try {
              const response = await sendRequest({
                endpoint: '/signup',
                method: 'POST',
                body: values,
              });
              console.log('User Added Successfully', response);
              if (setIsNewUserAdded) setIsNewUserAdded(true);
            } catch (error: any) {
              console.log(error.message);
            }
          };

          const updateUser = async () => {
            try {
              const response = await sendRequest({
                endpoint: `/users/${usersData?._id}`,
                method: 'PUT',
                body: values,
              });
              console.log('User Updated Successfully', response);
            } catch (error: any) {
              console.log(error.message);
            }
          };

          usersData ? updateUser() : addUser();
        }}
      >
        <Form>
          {usersData !== null ? (
            <h1 className={styles.title}>Update User</h1>
          ) : (
            <h1 className={styles.title}> Add User </h1>
          )}
          <div className={styles.name__email}>
            <div className={`${styles.input_field} `}>
              <FormikTextInput
                label="Username"
                name="username"
                type="text"
                required={true}
              />
            </div>

            <div className={`${styles.input_field}  `}>
              <FormikTextInput
                label="Email"
                name="email"
                type="text"
                required={true}
              />
            </div>
          </div>

          <div className={`${styles.input_field} ${styles.organization_role}`}>
            <div className={styles.org}>
              <FormikSelectInput
                label="Organization"
                name="organization"
                required={true}
              >
                <option value="">Select an Organization</option>
                {orgs?.map((el) => {
                  return (
                    <option value={el._id} key={el._id}>
                      {el.name}
                    </option>
                  );
                })}
              </FormikSelectInput>
            </div>

            <div className={styles.role}>
              <FormikSelectInput label="Role" name="role" required={true}>
                <option value="">Select a role</option>
                {loggedUserRole !== 'SUPER_ADMIN' ? (
                  <option value={(type + '_user').toUpperCase()}>
                    {type + ' User'}
                  </option>
                ) : (
                  <>
                    <option value={(type + '_user').toUpperCase()}>
                      {type + ' User'}
                    </option>
                    <option value={(type + '_admin').toUpperCase()}>
                      {type + ' Admin'}
                    </option>
                  </>
                )}
                {/* <option value="TECHNICIAN_ADMIN">Technician Admin</option> */}
              </FormikSelectInput>
            </div>
          </div>

          <div className={styles.input_field}>
            <FormikTextInput
              label="Phone-Number"
              name="phoneNumber"
              type="number"
              required={true}
            />
          </div>

          <div className={styles.actions}>
            <button onClick={cancelButtonHandler}>Cancel</button>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddUserFormV2;
