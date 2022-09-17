import { FetchRequestData } from '../models';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth';
const BACKEND_URL = 'http://localhost:8000';

const useRequest = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sendRequest = useCallback(
    async (data: FetchRequestData): Promise<any> => {
      const RequestMetaData: RequestInit = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'JWT ' + localStorage.getItem('authToken'),
        },
        method: data.method ? data.method : 'GET',
        body: data.body ? JSON.stringify(data.body) : null,
      };
      try {
        console.log('request meta data : ', RequestMetaData);
        const response = await fetch(
          `${BACKEND_URL}${data.endpoint}`,
          RequestMetaData,
        );
        const recievedData = await response.json();
        console.log(recievedData, 'recievedData');
        if (!response.ok) {
          throw new Error(recievedData);
        }
        return recievedData;
      } catch (error: any) {
        console.log(error.message, 'Error occured during request');
        if (error.message === 'Token Error') {
          dispatch(
            authActions.signin({
              isLoggedIn: false,
              role: null,
            }),
          );
          localStorage.removeItem("authToken");
          localStorage.removeItem("loggedUserRole");
          navigate('/');
        } else {
          throw new Error(error.message);
        }
      }
    },
    [],
  );

  return sendRequest;
};

export { useRequest };
// TODO handle common errors here & if error isn't common throw error again
// const addTodo = useCallback(() => {
//   setTodos((t) => [...t, "New Todo"]);
// }, [todos]);
