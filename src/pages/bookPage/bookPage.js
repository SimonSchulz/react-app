import React from 'react';
import {useParams} from "react-router-dom";
import {useGetBooksByIdQuery} from "../../api/apiSlice";
import "./bookPage.scss"
import ErrorMessage from "../../components/views/errorMessage/errorMessage";
import LoadSpinner from "../../components/views/Spinner/spinner";
const BookPage = () => {
    const {bookID} = useParams();
    const { data: books,isLoading,isError } = useGetBooksByIdQuery(bookID);
    const error = isError ? <ErrorMessage/> : null;
    return (
    <>
        {error}
        {isLoading ? <LoadSpinner/> : <View books={books.results[0]}/>}

    </>
    );
};

const View = ({books}) => {
    return (
        <>
            <div className="book-page-wrapper">
                <img src={books.formats['image/jpeg']} alt="cover"/>
                <div className="book-info">
                    <h2>{books.title}</h2>
                    <h3>{books.authors[0].name}</h3>
                    <p>Languages: {books.languages}</p>
                    <p>About Book</p>
                    <div>{books.subjects}</div>
                    <button>show more</button>
                </div>
            </div>}
        </>
    );
};


export default BookPage;