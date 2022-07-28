import React from 'react';
import {Form, Formik} from "formik";
import * as Yup from "yup";
import {Input} from "../formElements/input";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {setUser} from "../../../redux/slices/userSlice/userSlice";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import "./form.scss"

const LogIn = () => {
    const dispatch = useDispatch();
    const push = useNavigate();

    const handleLogin = (value) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, value.email, value.password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                push('/');
            })
            .catch(() => alert('Invalid user!'))
    }
    return (
        <div className="form-wrapper">
            <Formik
                initialValues = {{
                    email: '',
                    password: '',
                }}
                validationSchema = {Yup.object({
                    email: Yup.string()
                        .min(5, 'too short username')
                        .required('required!'),
                    password: Yup.string()
                        .min(7, 'too short password!')
                        .required('required!'),
                })}
                onSubmit = {values => handleLogin(values)}>
                <Form className="form">
                    <h2>Log In to Fox Library</h2>
                    <Input
                        label="email"
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="off"
                    />
                    <Input
                        label="password"
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="off"/>
                    <button type="submit">Log in</button>
                </Form>
            </Formik>
        </div>
    );
};

export default LogIn;