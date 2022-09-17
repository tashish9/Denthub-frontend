import StartingPageContent from '../components/starting-page/starting-page-content';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../models';
import { useEffect } from 'react';

const StartingPage = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/home');
    } else {
      navigate('/signin');
    }
  });

  return <StartingPageContent />;
};

export default StartingPage;
