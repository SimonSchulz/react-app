import React from 'react';
import img from '../../../assets/img/error.jpg'
import {Link} from "react-router-dom";
const ErrorMessage = () => {
    const style = {
        display: 'block',
        margin: 'auto',
        width: 470,
        height: 300
    }
    return (
        <>
            <img src={img} alt="error" style={style} />
        </>
    );
};

export default ErrorMessage;