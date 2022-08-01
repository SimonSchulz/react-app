import React from 'react';
import img from '../../../assets/img/error.jpg'
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