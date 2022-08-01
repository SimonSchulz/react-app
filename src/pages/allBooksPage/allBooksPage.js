import React, {useState} from 'react';
import Page from "../page/page";
import "./allBooks.scss"
import {useGetBooksByPageQuery, useGetBooksByStrQuery} from "../../redux/slices/api/apiSlice";
import {useSelector} from "react-redux";
import ErrorMessage from "../../components/views/errorMessage/errorMessage";
import LoadSpinner from "../../components/views/Spinner/spinner";

const AllBooksPage = () => {
    const search = useSelector(state=> state.searchReducer);
    const [page, setPage] = useState(1);
    const {
        data,
        isLoading,
        isError,
    } = useGetBooksByPageQuery(page);
    const {
        data:searchData,
        isLoading: searchLoading,
        isError: searchError,
    } = useGetBooksByStrQuery(search);

    const handlePrevPage = () => setPage(state => state-1);
    const handleNextPage = () => setPage(state => state+1);
    const error = isError ? <ErrorMessage/> : null;
    return (
        <>
            {error || searchError}
            {search ? searchLoading ? <LoadSpinner/> : <Page title={'All books'} data={searchData} /> :
            isLoading ?  <LoadSpinner/>   : <Page title={'All books'} data={data} />}
            <div className="page-btn">
                {page===1? null :<button onClick={handlePrevPage} >previous page</button>}
                <button onClick={handleNextPage} >next page</button>
            </div>
        </>

    );
};
export default AllBooksPage;