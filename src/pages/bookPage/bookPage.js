import React from 'react';
import {useParams} from "react-router-dom";
import {useGetBookByIdQuery} from "../../redux/slices/api/apiSlice";
import "./bookPage.scss"
import ErrorMessage from "../../components/views/errorMessage/errorMessage";
import LoadSpinner from "../../components/views/Spinner/spinner";

import {View} from "./View";
const BookPage = () => {
    const {bookID} = useParams();
    const { data,isLoading,isError } = useGetBookByIdQuery(bookID);
    console.log(data);
    const error = isError ? <ErrorMessage/> : null;
    return (
    <>
        {error}
        {isLoading ? <LoadSpinner/> : <View {...data.results[0]}/>}

    </>
    );
};

export default BookPage;
