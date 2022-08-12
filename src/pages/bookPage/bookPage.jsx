import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoadSpinner from '../../components/views/Spinner/spinner';
import { useGetBookByIdQuery } from '../../redux/slices/api/apiSlice';
import ErrorMessage from '../../components/views/errorMessage/errorMessage';
import { addId } from '../../redux/slices/historySlice/historySlice';
import View from './View';
import './bookPage.scss';

function BookPage() {
  const dispatch = useDispatch();
  const historyIds = useSelector((state) => state.historyReducer.ids);
  const { bookID } = useParams();
  if (historyIds.indexOf(bookID) === -1) {
    dispatch(addId(bookID));
  }
  const { data, isLoading, isError } = useGetBookByIdQuery(bookID);
  const error = isError ? <ErrorMessage /> : null;
  return (
    <>
      {error}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {isLoading ? <LoadSpinner /> : <View {...data?.[0]} />}
    </>
  );
}

export default BookPage;
