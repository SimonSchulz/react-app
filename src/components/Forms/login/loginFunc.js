import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {setUser} from "../../../redux/slices/userSlice/userSlice";

export const login = (value, dispatch, navigate) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, value.email, value.password)
        .then(({user}) => {
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken,
            }));
            navigate('/');
        })
        .catch(() => alert('Invalid user!'))
}