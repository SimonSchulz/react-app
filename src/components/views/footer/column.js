import React from 'react';

const Column = ({title, data}) => {
    return (
        <div className="column">
            <div className="title">{title}</div>
            <ul>
                {data.map((el, i)=>{return <li key={i}><a href="#">{el}</a></li>})}
            </ul>
        </div>

    );
};

export default Column;