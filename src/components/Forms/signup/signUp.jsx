import React from 'react';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Input from '../formElements/input';
import CheckBox from '../formElements/checkBox';
import register from './register';
import registerValidation from './registerValidation';
import MyDatePicker from '../formElements/DatePicker';

function SignUp() {
  const dispatch = useDispatch();
  const push = useNavigate();
  return (
    <div className="form-wrapper">
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          birthdate: '',
          terms: false,
        }}
        validationSchema={registerValidation}
        onSubmit={(values) => register(values, dispatch, push)}
      >
        <Form className="form">
          <h2>Welcome to Fox Library</h2>
          <Input
            label="username"
            id="name"
            name="name"
            type="text"
            autoComplete="off"
          />
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
          <MyDatePicker
            label="Your birthdate"
            name="birthdate"
            autoComplete="off"
          />
          <CheckBox name="terms">
            Agreement with the privacy policy
          </CheckBox>
          <button type="submit" className="submit-btn">Sign up</button>
        </Form>
      </Formik>
    </div>
  );
}

export default SignUp;
