import './index.css';
import DeclareRoutes from './pages/Routes/Routes';
import useAuth from './custom-hooks/useAuth';
import { Fragment } from 'react';
import MainNavigation from './components/layout/main-navigation';

const App = () => {
  const isLoggedIn = useAuth();

  return (
    <Fragment>
      {isLoggedIn && <MainNavigation />}
      <DeclareRoutes />
    </Fragment>
  );
};

export default App;
