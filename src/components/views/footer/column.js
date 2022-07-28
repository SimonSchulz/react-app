import React from 'react';
import PropTypes from "prop-types";
import Page from "../../../pages/page/page";

const Column = ({title, data}) => {
    return (
        <div className="column">
            <div className="title">{title}</div>
            <ul className="footer-list">
                {data.map((el, i)=>{return <li key={i} ><a href="#">{el}</a></li>})}
            </ul>
        </div>

    );
};

export default Column;

Column.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array
}