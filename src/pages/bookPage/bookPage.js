import React from 'react';
import {useParams} from "react-router-dom";
import {useGetBookByIdQuery} from "../../redux/slices/api/apiSlice";
import "./bookPage.scss"
import ErrorMessage from "../../components/views/errorMessage/errorMessage";
import LoadSpinner from "../../components/views/Spinner/spinner";

import {View} from "./View";
import {useDispatch, useSelector} from "react-redux";
import {addId} from "../../redux/slices/historySlice/historySlice";
const BookPage = () => {
    const dispatch = useDispatch();
    const historyIds = useSelector(state=>state.historyReducer.ids)
    let {bookID} = useParams();
    if(historyIds.indexOf(bookID)===-1){
        dispatch(addId(bookID))
    };
    const { data,isLoading,isError } = useGetBookByIdQuery(bookID);
    const error = isError ? <ErrorMessage/> : null;
    return (
    <>
        {error}
        {isLoading ? <LoadSpinner/> : <View {...data?.[0]}/>}

    </>
    );
};

export default BookPage;
