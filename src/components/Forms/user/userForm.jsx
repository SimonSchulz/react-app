import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Input from '../formElements/input';
import { logOut, setUser } from '../../../redux/slices/userSlice/userSlice';
import avatar from '../../../assets/svg/avatar.svg';

function UserForm() {
  const dispatch = useDispatch();
  const push = useNavigate();
  const {
    name, email, birthday, password,
  } = useSelector((state) => state.userReducer);
  return (
    <div className="form-wrapper">
      <Formik
        initialValues={{
          name,
          email,
          birthday,
          password,
        }}
        validationSchema={Yup.object({
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
        })}
        onSubmit={(values) => dispatch(setUser(values))}
      >
        <Form className="form">
          <h2 style={{ textAlign: 'center' }}>Settings</h2>
          <img
            src={avatar}
            alt="avatar"
            style={{ width: '100px', display: 'block', margin: '15px auto' }}
          />
          <Input
            hidden
            label="change foto"
            id="avatar"
            name="avatar"
            type="file"
            placeholder="change"
            autoComplete="off"
          />
          <Input
            label="username"
            id="name"
            name="name"
            type="text"
            autoComplete="off"
          />
          <label htmlFor="birthday">Your birthdate</label>
          <Field
            id="birthday"
            name="birthday"
            type="text"
            autoComplete="off"
          />
          <ErrorMessage component="div" className="error" name="birthday" />
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
          <button type="submit" style={{ margin: '20px auto' }}>save</button>
        </Form>
      </Formik>
      <button type="button" style={{ margin: '40px auto', background: 'black' }} onClick={() => { dispatch(logOut()); push('/login'); window.location.reload(); }}>log out</button>
    </div>
  );
}

export default UserForm;
