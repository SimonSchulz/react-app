import React from 'react';
import Page from "../page/page";
import {useGetBookByIdQuery} from "../../redux/slices/api/apiSlice";
import {useSelector} from "react-redux";
import ErrorMessage from "../../components/views/errorMessage/errorMessage";
import LoadSpinner from "../../components/views/Spinner/spinner";
const OrderPage = () => {
    const ids = useSelector(state => state.orderReducer.join());
    const style = {
        margin: "150px auto",
        fontWeight: 600,
        fontSize: 24,
        color: '#B5B5B5'
    }
    const {
        data,
        isLoading,
        isError,
    } = useGetBookByIdQuery(ids);
    const error = isError ? <ErrorMessage/> : null;
    return (
        <>
            {error}
            {isLoading ? <LoadSpinner/> :
            ids.length ===0 ? <h2 style={style}>Oops! You haven't added any book yet</h2> : <Page title={'My orders'} data={data}/>}
        </>
    );
};
export default OrderPage;