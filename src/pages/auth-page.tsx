import Signin from '../components/auth/signin';

const AuthPage = () => {
  // based on isLoggedIn state in context/redux
  return <Signin />;
};

export default AuthPage;


// Auth page includes both signup & signin ? 