import React from 'react';
import Card from "../../components/views/card/card";
import {useGetBooksQuery} from "../../redux/slices/api/apiSlice"
import LoadSpinner from "../../components/views/Spinner/spinner";
import ErrorMessage from "../../components/views/errorMessage/errorMessage";
import {Link} from "react-router-dom";
import "./allBooks.scss"
const AllBooksPage = () => {
    const {
        data: books =[],
        isLoading,
        isError,
    } = useGetBooksQuery();
    const error = isError ? <ErrorMessage/> : null;
    return (
        <div className="container">
          <h2>All books</h2>
            <div className="book-wrapper">
                {error}
                {isLoading ? <LoadSpinner/> : books.results.map((item) =><Link key={item.id} to={`/${item.id}`}> <Card book={item}/></Link>)}
            </div>
            <button className="show-more-btn">Show more</button>
        </div>
    );
};

export default AllBooksPage;