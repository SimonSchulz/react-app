import {useField} from "formik";
import React from "react";

export const CheckBox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <>
            <label className="checkbox">
                <input type="checkbox" className="check" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (<div className="error">{meta.error}</div>) : null}
        </>
    );
};