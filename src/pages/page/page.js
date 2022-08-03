import React from 'react';
import PropTypes from 'prop-types';
import Card from "../../components/views/card/card";

const Page = ({title, data}) => {
    const emptyDataMessage = 'Oops! Books not found';
    const style = {
        fontWeight: 600,
        fontSize: 24,
        color: '#B5B5B5'
    }
    return (
        <div className="container page-wrapper">
            <h2>{title}</h2>
            <div className="book-wrapper">
                {data.length===0?<h2 style={style}>{emptyDataMessage}</h2>:
                 data?.map((item,i) =><Card key={item.id} {...item} />)}
            </div>
        </div>
    );
};

export default Page;

Page.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array
}