import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Input from '../formElements/input';
import './form.scss';
import login from './loginFunc';

function LogIn() {
  const dispatch = useDispatch();
  const push = useNavigate();
  return (
    <div className="form-wrapper">
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .min(5, 'too short username')
            .required('required!'),
          password: Yup.string()
            .min(7, 'too short password!')
            .required('required!'),
        })}
        onSubmit={(values) => login(values, dispatch, push)}
      >
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
            autoComplete="off"
          />
          <button type="submit">Log in</button>
        </Form>
      </Formik>
    </div>
  );
}

export default LogIn;
