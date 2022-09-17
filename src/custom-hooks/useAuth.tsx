import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../store/auth';

const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authToken = localStorage.getItem('authToken');
  const loggedUserRole = localStorage.getItem('loggedUserRole');
  // const navigate = useNavigate();
  // const  = useSelector((state: RootState) => state.auth.isLoggedIn);

  useEffect(() => {
    if (authToken) {
      dispatch(
        authActions.signin({
          role: loggedUserRole,
        }),
      );
    } else {
      navigate('/signin');
    }
  }, [navigate, authToken, loggedUserRole, dispatch]);

  return !!authToken;
};

export default useAuth;
