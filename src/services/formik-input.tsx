import { useField } from 'formik';

const FormikTextInput = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>
        {props.required ? (
          <>
            {label}
            <span>*</span>
          </>
        ) : (
          <>{label}</>
        )}
      </label>
      <input {...field} {...props} />
      {meta.touched && meta.error && (
        <div className="input__error">{meta.error}</div>
      )}
    </>
  );
};

const FormikSelectInput = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>
        {props.required ? (
          <>
            {label}
            <span>*</span>
          </>
        ) : (
          <>{label}</>
        )}
      </label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="input__error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export { FormikTextInput, FormikSelectInput };
