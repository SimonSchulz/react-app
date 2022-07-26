import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function useAuth() {
  const { email } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  useEffect(() => {
    if (!email) { navigate('/login'); }
  }, []);
  return {
    isAuth: !!email,
  };
}
export default useAuth;
