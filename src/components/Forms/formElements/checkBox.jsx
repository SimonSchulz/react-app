import { useField } from 'formik';
import React from 'react';
import PropTypes from 'prop-types';

function CheckBox({ children, ...props }) {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <>
      <label htmlFor="checkbox" className="checkbox">
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <input type="checkbox" className="check" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (<div className="error">{meta.error}</div>) : null}
    </>
  );
}
export default CheckBox;

CheckBox.propTypes = {
  children: PropTypes.string.isRequired,
  props: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])).isRequired,
  name: PropTypes.string.isRequired,
};
