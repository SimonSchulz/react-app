import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addStringSearch } from '../../redux/slices/historySlice/historySlice';
import { useGetBooksByStrQuery } from '../../redux/slices/api/apiSlice';
import ErrorMessage from '../../components/views/errorMessage/errorMessage';
import LoadSpinner from '../../components/views/Spinner/spinner';
import Page from '../page/page';
import { setPage } from '../../redux/slices/pageSlice/pageSlice';

function SearchPage() {
  const startPage = 1;
  const page = useSelector((state) => state.pageReducer);
  const { searchString } = useParams();
  const obj = {
    str: searchString,
    page,
  };
  const dispatch = useDispatch();

  const historySearch = useSelector((state) => state.historyReducer.search);
  if (historySearch.indexOf(searchString) === -1 && searchString) {
    dispatch(addStringSearch(searchString));
  }
  const { data, isFetching, isError } = useGetBooksByStrQuery(obj);
  const error = isError ? <ErrorMessage /> : null;
  const handlePrevPage = () => {
    if (page > startPage) {
      dispatch(setPage(page - 1));
    }
  };
  const handleNextPage = () => {
    if (data?.next) {
      dispatch(setPage(page + 1));
    }
  };
  return (
    <>
      <div className="container">
        {error}
        {isFetching ? <LoadSpinner /> : <Page title="We have found:" data={data?.results} />}
      </div>
      <div className="page-btn">
        {page === startPage ? null : <button type="button" onClick={handlePrevPage}>previous page</button>}
        {data?.next ? <button type="button" onClick={handleNextPage}>next page</button> : null}
      </div>
    </>

  );
}

export default SearchPage;
