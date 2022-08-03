import {setUser} from "../../../redux/slices/userSlice/userSlice";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";

export const register = (value, dispatch, navigate) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, value.email, value.password)
            .then(({user}) => {
                dispatch(setUser({
                    name: value.name,
                    email: value.email,
                    birthday: value.birthday,
                    password: value.password,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate('/login');
            })
            .catch(console.error)
};

