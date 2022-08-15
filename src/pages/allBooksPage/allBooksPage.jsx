import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Page from '../page/page';
import './allBooks.scss';
import { useGetBooksByPageQuery } from '../../redux/slices/api/apiSlice';
import ErrorMessage from '../../components/views/errorMessage/errorMessage';
import LoadSpinner from '../../components/views/Spinner/spinner';
import { setPage } from '../../redux/slices/pageSlice/pageSlice';

function AllBooksPage() {
  const startPage = 1;
  const page = useSelector((state) => state.pageReducer);
  const dispatch = useDispatch();
  const {
    data,
    isFetching,
    isError,
  } = useGetBooksByPageQuery(page);
  const handlePrevPage = () => dispatch(setPage(page - 1));
  const handleNextPage = () => dispatch(setPage(page + 1));
  const error = isError ? <ErrorMessage /> : null;
  return (
    <>
      {error}
      {isFetching ? <LoadSpinner /> : <Page title="All books" data={data} />}
      <div className="page-btn">
        {page === startPage ? null : <button type="button" onClick={handlePrevPage}>previous page</button>}
        <button type="button" onClick={handleNextPage}>next page</button>
      </div>
    </>

  );
}
export default AllBooksPage;
