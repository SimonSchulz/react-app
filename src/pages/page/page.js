import React from 'react';
import PropTypes from 'prop-types';
import Card from "../../components/views/card/card";

const Page = ({title, data}) => {
    return (
        <div className="container page-wrapper">
            <h2>{title}</h2>
            <div className="book-wrapper">
                {data?.map((item,i) =><Card key={item.id} {...item} />)}
            </div>
        </div>
    );
};

export default Page;

Page.propTypes = {
    title: PropTypes.string,
    queryHook: PropTypes.func
}