import React from 'react';
import {setUser} from "../../../redux/slices/userSlice/userSlice";
import {setLocalStorage} from "../../../utils/localeStorage";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";

export const register = (value, dispatch, navigate, user) => {
    console.log(user);
        dispatch(setUser({
            name: value.name,
            email: value.email,
            birthday: value.birthday,
        }));
        setLocalStorage('user', user);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, value.email, value.password)
            .then(({user}) => {
                dispatch(setUser({
                    id: user.uid,
                    token: user.accessToken,
                }));
                setLocalStorage('user', user);
                navigate('/login');
            })
            .catch(console.error)
};

