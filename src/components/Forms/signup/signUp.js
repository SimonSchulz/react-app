import React from 'react';
import { Formik, Field, Form, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import {Input} from "../formElements/input";
import {CheckBox} from "../formElements/checkBox";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {setUser} from "../../../redux/slices/userSlice/userSlice";



const SignUp = () => {
    const dispatch = useDispatch();
    const push = useNavigate();
    const handleRegister = (value) => {
        dispatch(setUser({
            name: value.name,
            email: value.email,
            birthday: value.birthday,
        }));
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, value.email, value.password)
            .then(({user}) => {
                dispatch(setUser({
                    id: user.uid,
                    token: user.accessToken,
                }));
                push('/login');
            })
            .catch(console.error)
    }
    return (
        <div className="form-wrapper">
        <Formik
            initialValues = {{
                name: '',
                email: '',
                birthday: `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`,
                password: '',
                terms: false
            }}
            validationSchema = {Yup.object({
                name: Yup.string()
                    .min(5, 'too short username')
                    .required('required!'),
                email: Yup.string()
                    .email('Invalid email')
                    .required('required!'),
                password: Yup.string()
                    .min(7, 'too short password!')
                    .required('required!'),
                birthday: Yup.string()
                    .min(8, 'too short, need format dd.mm.yyyy')
                    .max(10, 'too long, need format dd.mm.yyyy')
                    .required('required!'),
                terms: Yup.boolean()
                    .required('required!')
                    .oneOf([true], "required agrees")
            })}
            onSubmit = {values => handleRegister(values)}>

            <Form className="form">
                <h2>Welcome to Fox Library</h2>
                <Input
                    label="username"
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="off"
                />
                <label htmlFor="birthdate">Your birthdate</label>
                <Field
                    id="birthday"
                    name="birthday"
                    type="text"
                    autoComplete="off"
                />
                <ErrorMessage component="div" className="error" name="birthday"/>
                <Input
                    label="Email"
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
                    autoComplete="off"
                />
                <CheckBox name="terms">
                    Agreement with the privacy policy
                </CheckBox>
                <button type="submit">Sign up</button>
            </Form>
        </Formik>
        </div>
    )
};

export default SignUp;