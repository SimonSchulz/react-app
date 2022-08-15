import React from 'react';
import { useSelector } from 'react-redux';
import Page from '../page/page';
import { useGetBookByIdQuery } from '../../redux/slices/api/apiSlice';
import ErrorMessage from '../../components/views/errorMessage/errorMessage';
import LoadSpinner from '../../components/views/Spinner/spinner';

function OrderPage() {
  const ids = useSelector((state) => state.orderReducer.join());
  const {
    data,
    isLoading,
    isError,
  } = useGetBookByIdQuery(ids);
  const error = isError ? <ErrorMessage /> : null;
  const load = isLoading ? <LoadSpinner /> : null;
  return (
    <>
      {error}
      {load || ids.length === 0 ? <h2 className="empty">Oops! You haven&apos;t added any book yet</h2> : <Page title="My orders" data={data} />}
    </>
  );
}
export default OrderPage;
