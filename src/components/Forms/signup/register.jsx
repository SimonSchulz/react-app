import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { signUp } from '../../../redux/slices/userSlice/userSlice';

const register = (value, dispatch, navigate) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, value.email, value.password)
    .then(({ user }) => {
      dispatch(signUp({
        name: value.name,
        email: value.email,
        password: value.password,
        id: user.uid,
        birthdate: value.birthdate.toString(),
        token: user.accessToken,
      }));
      navigate('/login');
    })
    .catch(console.error);
};
export default register;
