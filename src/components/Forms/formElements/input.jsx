import { useField } from 'formik';
import React from 'react';
import PropTypes from 'prop-types';

function Input({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.name} className={props.name}>{label}</label>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <input {...field} {...props} />
      {meta.touched && meta.error ? (<div className="error">{meta.error}</div>) : null}
    </>
  );
}
export default Input;
Input.propTypes = {
  label: PropTypes.string.isRequired,
  props: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])).isRequired,
  name: PropTypes.string.isRequired,
};
