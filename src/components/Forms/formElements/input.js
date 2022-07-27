import {useField} from "formik";
import React from "react";

export const Input = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.name}>{label}</label>
            <input {...field} {...props} />
            {meta.touched && meta.error ? (<div className="error">{meta.error}</div>) : null}
        </>
    );
};