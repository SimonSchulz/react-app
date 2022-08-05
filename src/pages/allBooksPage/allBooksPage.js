import React from 'react';
import Page from "../page/page";
import "./allBooks.scss"
import {useGetBooksByPageQuery} from "../../redux/slices/api/apiSlice";
import ErrorMessage from "../../components/views/errorMessage/errorMessage";
import LoadSpinner from "../../components/views/Spinner/spinner";
import {useDispatch, useSelector} from "react-redux";
import {setPage} from "../../redux/slices/pageSlice/pageSlice";

const AllBooksPage = () => {
    const page = useSelector(state=>state.pageReducer);
    const dispatch = useDispatch();
    const {
        data,
        isLoading,
        isError,
    } = useGetBooksByPageQuery(page);
    const handlePrevPage = () => dispatch(setPage(page-1));
    const handleNextPage = () => dispatch(setPage(page+1));
    const error = isError ? <ErrorMessage/> : null;
    return (
        <>
            {error}
            {isLoading ?  <LoadSpinner/>   : <Page title={'All books'} data={data} />}
            <div className="page-btn">
                {page===1? null :<button onClick={handlePrevPage} >previous page</button>}
                <button onClick={handleNextPage} >next page</button>
            </div>
        </>

    );
};
export default AllBooksPage;
