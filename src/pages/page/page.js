import React from 'react';
import PropTypes from 'prop-types';
import LoadSpinner from "../../components/views/Spinner/spinner";
import Card from "../../components/views/card/card";
import ErrorMessage from "../../components/views/errorMessage/errorMessage";
import {useGetBookByIdQuery} from "../../redux/slices/api/apiSlice";

const Page = ({title, id}) => {
    const {
        data: books =[],
        isLoading,
        isError,
    } = useGetBookByIdQuery(id);
    const style = {
        margin: "auto",
        fontWeight: 600,
        fontSize: 24,
        lineHeight: 33,
        color: '#B5B5B5'
    }
    const error = isError ? <ErrorMessage/> : null;
    return (
        <div className="container page-wrapper">
            <h2>{title}</h2>
            <div className="book-wrapper">
                {error}
                {title ==='My orders' && id.length ===0 ? <h2 style={style}>Oops! You haven't added any book yet</h2>:
                isLoading ? <LoadSpinner/> : books.results.map(item =><Card key={item.id} {...item} />)}
            </div>
            <button className="show-more-btn">Show more</button>
        </div>
    );
};

export default Page;

Page.propTypes = {
    title: PropTypes.string,
    query: PropTypes.func
}