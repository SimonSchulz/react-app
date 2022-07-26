import React from 'react';
import Card from "../card/card";
import {useGetBooksQuery} from "../../../api/apiSlice"
import LoadSpinner from "../Spinner/spinner";

const AllBooksPage = () => {
    const {
        data: books = [],
        isLoading,
        isError,
    } = useGetBooksQuery();
    const isLoad = isLoading ? <LoadSpinner/>:null;
    const isErr = isError ? <h5>Ошибка загрузки</h5>:null;
    return (
        <div className="container">
          <h2>All books</h2>
            <div className="book-wrapper">
                {isLoad}
                {isErr}
                {books.map(item => <Card key={item.id} book={item}/>)}
            </div>
            <button className="show-more-btn">Show more</button>
        </div>
    );
};

export default AllBooksPage;