import React from 'react';
import {Form, Formik} from "formik";
import * as Yup from "yup";
import {Input} from "../formElements/input";
import "./logIn.scss"

const LogIn = () => {
    return (
        <div className="log-in-wrapper">
            <Formik
                initialValues = {{
                    name: '',
                    password: '',
                }}
                validationSchema = {Yup.object({
                    name: Yup.string()
                        .min(5, 'too short username')
                        .required('required!'),
                    password: Yup.string()
                        .min(7, 'too short password!')
                        .required('required!'),
                })}
                onSubmit = {values => console.log(JSON.stringify(values, null, 2))}>
                <Form className="form">
                    <h2>Log In to Fox Library</h2>
                    <Input
                        label="username"
                        id="name"
                        name="name"
                        type="text"
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