import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorMessage, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import Input from '../formElements/input';
import { logOut, setUser } from '../../../redux/slices/userSlice/userSlice';
import avatar from '../../../assets/svg/avatar.svg';
import userValidation from './userValidation';
import MyDatePicker from '../formElements/DatePicker';

function UserForm() {
  const dispatch = useDispatch();
  const push = useNavigate();
  const { name, email, password } = useSelector((state) => state.userReducer);
  const birthdate = new Date(useSelector((state) => state.userReducer.birthdate));
  return (
    <div className="form-wrapper">
      <Formik
        initialValues={{
          name,
          email,
          password,
          birthdate,
        }}
        validationSchema={userValidation}
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
          <MyDatePicker
            label="Your birthdate"
            name="birthdate"
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
          <button type="submit" className="submit-btn" style={{ margin: '20px auto' }}>save</button>
        </Form>
      </Formik>
      <button type="button" className="submit-btn" style={{ margin: '40px auto', background: 'black' }} onClick={() => { dispatch(logOut()); push('/login'); window.location.reload(); }}>log out</button>
    </div>
  );
}

export default UserForm;
