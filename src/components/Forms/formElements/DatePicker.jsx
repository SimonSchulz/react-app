import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import DateView from 'react-datepicker';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-datepicker/dist/react-datepicker.css';
import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';

function MyDatePicker(props) {
  // eslint-disable-next-line react/prop-types
  const { label, name, ...rest } = props;
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              maxDate={new Date()}
              dateFormat="dd.MM.yyyy"
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </>
  );
}

export default MyDatePicker;
