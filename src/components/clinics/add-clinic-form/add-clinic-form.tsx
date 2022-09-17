import styles from './add-clinic-form.module.css';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  FormikSelectInput,
  FormikTextInput,
} from '../../../services/formik-input';
import { useRequest } from '../../../custom-hooks/useRequest';
import { Organization } from '../../../models';

type Props = {
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  clinicData: Organization | null;
  type: string;
  parentClinics: Organization[] | null;
};

const AddClinicForm = (props: Props) => {
  const { setIsFormOpen, clinicData, parentClinics, type } = props;


  const sendRequest = useRequest();

  const cancelButtonHandler = () => {
    setIsFormOpen(false);
  };

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{
          // TODO
          name: clinicData?.name || '',
          email: clinicData?.contact.email ? clinicData.contact.email : '',
          website: clinicData?.contact.website
            ? clinicData?.contact.website
            : '',
          phoneNumber: clinicData?.contact.phoneNumber
            ? clinicData?.contact.phoneNumber
            : '',
          street: clinicData?.address.street ? clinicData?.address.street : '',
          city: clinicData?.address.city ? clinicData?.address.city : '',
          postalCode: clinicData?.address.postal_code
            ? clinicData?.address.postal_code
            : '',
          country: clinicData?.address.country
            ? clinicData?.address.country
            : '',
          parentClinic: clinicData?.parentClinic
            ? clinicData?.parentClinic._id
            : '',
          type: type,
        }} // todo
        validationSchema={Yup.object({
          name: Yup.string().required('Name is a required field'),
          email: Yup.string().email().required('Email is a required field'),
          website: Yup.string(),
          phoneNumber: Yup.number().max(
            9999999999,
            'Please add a valid phone number',
          ),
          street: Yup.string(),
          city: Yup.string().required('City is a required field'),
          postalCode: Yup.string().required('PostalCode is a required field'),
          country: Yup.string().required('Country is a required field'),
          parentClinic: Yup.string().required(
            'Parent Clinic is a required field',
          ),
        })}
        onSubmit={async (values) => {
          console.log(values);

          const addClinic = async () => {
            try {
              const addClinicResponse = await sendRequest({
                endpoint: '/organizations',
                method: 'POST',
                body: values,
              });
              console.log('added Clinic Successfully!', addClinicResponse);
            } catch (error: any) {
              console.log(error.message);
            }
          };

          const updateClinic = async () => {
            try {
              const updateClinicResponse = await sendRequest({
                endpoint: `/organizations/${clinicData?._id}`,
                method: 'PUT',
                body: values,
              });
              console.log('updated Clinic Successfully!', updateClinicResponse);
            } catch (error: any) {
              console.log(error.message);
            }
          };

          clinicData ? updateClinic() : addClinic();
        }}
      >
        <Form>
          {clinicData !== null ? (
            <h1 className={styles.title}>Update Clinic</h1>
          ) : (
            <h1 className={styles.title}> Add Clinic </h1>
          )}

          <div className={`${styles.input_field} ${styles.name}`}>
            <FormikTextInput
              label="Name"
              name="name"
              type="text"
              required={true}
            />
          </div>

          <div className={styles.contact}>
            <div className={`${styles.input_field}  `}>
              <FormikTextInput
                label="Email"
                name="email"
                type="text"
                required={true}
              />
            </div>

            <div className={`${styles.input_field}  `}>
              <FormikTextInput
                label="Website"
                name="website"
                type="text"
                required={true}
              />
            </div>

            <div className={`${styles.input_field}  `}>
              <FormikTextInput
                label="Phone Number"
                name="phoneNumber"
                type="number"
              />
            </div>
          </div>

          <div className={styles.address}>
            <div className={styles.input_field}>
              <FormikTextInput label="Street" name="street" type="text" />
            </div>

            <div className={`${styles.input_field} ${styles.city} `}>
              <FormikTextInput
                label="City"
                name="city"
                type="text"
                required={true}
              />
            </div>

            <div className={`${styles.input_field} ${styles.postalCode}  `}>
              <FormikTextInput
                label="Postal Code"
                name="postalCode"
                type="text"
                required={true}
              />
            </div>

            <div className={`${styles.input_field}  `}>
              <FormikTextInput
                label="Country"
                name="country"
                type="text"
                required={true}
              />
            </div>
          </div>

          <div className={`${styles.input_field} ${styles.parentClinic}`}>
            <FormikSelectInput
              label="Parent Clinic"
              name="parentClinic"
              required={true}
            >
              <option value="">Select an Organization</option>
              {parentClinics?.map((el) => {
                return (
                  <option value={el._id} key={el._id}>
                    {el.name}
                  </option>
                );
              })}
            </FormikSelectInput>
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

export default AddClinicForm;
