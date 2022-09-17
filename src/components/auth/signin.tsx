import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './signin.module.css';
import { FetchRequestData } from '../../models';
import { authActions } from '../../store/auth';
import { useRequest } from '../../custom-hooks/useRequest';

const Login = () => {
  const [submittedData, setSubmittedData] = useState({});
  const dispatch = useDispatch();
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const sendRequest = useRequest();

  const formSubmissionHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmittedData({
      email: emailInputRef.current?.value,
      password: passwordInputRef.current?.value,
    });
    if (emailInputRef.current !== null) {
      emailInputRef.current.value = '';
    }
    if (passwordInputRef.current !== null) {
      passwordInputRef.current.value = '';
    }
  };

  useEffect(() => {
    const setLoginStateAndToken = async () => {
      try {
        const loggedInUserData = await sendRequest({
          method: 'POST',
          endpoint: '/signin',
          body: submittedData,
        });

        // throw this to local storage
        localStorage.setItem('authToken', loggedInUserData.authToken);
        localStorage.setItem('loggedUserRole', loggedInUserData.role);

        // update login state in redux
        dispatch(
          authActions.signin({
            isLoggedIn: true,
            role: loggedInUserData.role,
          }),
        );
        navigate('/clinics');
      } catch (error: any) {
        // error handling SNACKBAR
        console.log(error.message, 'error in signin component');
      }
    };
    if (Object.keys(submittedData).length !== 0) {
      setLoginStateAndToken();
    }
  }, [submittedData, dispatch, navigate, sendRequest]);

  return (
    <section className={styles.container}>
      <form className={styles.signin} onSubmit={formSubmissionHandler}>
        <h1>SignIn to Denthub</h1>
        <div className={styles.control}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={styles.actions}>
          <button>SignIn</button>
        </div>
      </form>
    </section>
  );
};

export default Login;
