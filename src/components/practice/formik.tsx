import styles from './formik.module.css';
import { Formik, useField, Form } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  const MyTextInput = ({ label, ...props }: any) => {
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}>
          {label.slice(-1) === '*' && (
            <>
              {label.slice(0, label.length - 1)}
              <span>*</span>
            </>
          )}
        </label>
        <input
          className={`${meta.touched && meta.error && styles.input_error}`}
          {...field}
          {...props}
        />
        {meta.touched && meta.error && (
          <div className={styles.error}>{meta.error}</div>
        )}
      </>
    );
  };

  const MySelect = ({ label, ...props }: any) => {
    const [field, meta] = useField(props);
    return (
      <div>
        <label htmlFor={props.id || props.name}>
          {label.slice(-1) === '*' && (
            <>
              {label.slice(0, label.length - 1)}
              <span>*</span>
            </>
          )}
        </label>
        <select {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className={styles.error}>{meta.error}</div>
        ) : null}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{
          email: '', // string
          name: '', // string
          organization: '', // dropdown
          role: '', // dropdown
          phoneNumber: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string().email().required('Email is a required field'),
          name: Yup.string().required('Name is a required field'),
          organization: Yup.string().required('Please choose an Organization'),
          role: Yup.string()
            .oneOf(
              ['designer', 'development', 'product', 'other'],
              'Choose a Role',
            )
            .required('Choose a Role'),
          phoneNumber: Yup.number()
            .required('Please enter Phone Number')
            .max(9999999999, 'Please add a valid phone number'),
        })}
        onSubmit={(values) => {
          console.log(values, 'values');
        }}
      >
        <Form>
          <h1 className={styles.title}> Add User Form v2 </h1>
          <div className={styles.name__email}>
            <div className={`${styles.input_field} `}>
              <MyTextInput label="Name*" name="name" type="text" />
            </div>

            <div className={`${styles.input_field}  `}>
              <MyTextInput label="Email*" name="email" type="text" />
            </div>
          </div>

          <div className={`${styles.input_field} ${styles.organization_role}`}>
            <div className={styles.org}>
              <MySelect label="Organization*" name="organization">
                <option value="">Select an Organization</option>
                <option value="designer">Options coming soon</option>
              </MySelect>
            </div>

            <div className={styles.role}>
              <MySelect label="Role*" name="role">
                <option value="">Select a role</option>
                <option value="designer">Technician Admin</option>
                <option value="development">Developer</option>
                <option value="product">Product Manager</option>
                <option value="other">Other</option>
              </MySelect>
            </div>
          </div>

          <div className={styles.input_field}>
            <MyTextInput
              label="Phone-Number*"
              name="phoneNumber"
              type="number"
            />
          </div>

          <div className={styles.actions}>
            <button>Cancel</button>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;
