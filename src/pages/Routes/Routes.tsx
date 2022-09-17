import { Routes, Route } from 'react-router-dom';
import PopUp from '../../components/ui/pop-up/pop-up';
import AuthPage from '../auth-page';
import ClinicsPage from '../clinics-page';
import DentistsPage from '../dentists-page';
import HomePage from '../home-page';
import LabsPage from '../labs-page';
import StartingPage from '../starting-page';
import TechniciansPage from '../technicians-page';
import UsersPage from '../users-page';

const DeclareRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<StartingPage />} />
      <Route path="/signin" element={<AuthPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/clinics" element={<ClinicsPage />} />
      <Route path="/labs" element={<LabsPage />} />
      <Route path="/dentists" element={<DentistsPage />} />
      <Route path="/technicians" element={<TechniciansPage />} />
      <Route path="/popup" element={<PopUp />} />
    </Routes>
  );
};

export default DeclareRoutes;
ATBBBCQUUHa9S6YPrurWZNSZGdur0AEDCFE1
