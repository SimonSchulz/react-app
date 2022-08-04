import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams,} from "react-router-dom";
import {addStringSearch} from "../../redux/slices/historySlice/historySlice";
import {useGetBooksByStrQuery} from "../../redux/slices/api/apiSlice";
import ErrorMessage from "../../components/views/errorMessage/errorMessage";
import LoadSpinner from "../../components/views/Spinner/spinner";
import Page from "../page/page";

const SearchPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let {searchString} = useParams()
    const historySearch = useSelector(state=>state.historyReducer.search);
    if(historySearch.indexOf(searchString)===-1 && searchString){
        dispatch(addStringSearch(searchString))
    }
    const { data,isLoading,isError } = useGetBooksByStrQuery(searchString);
    const error = isError ? <ErrorMessage/> : null;
    return (
        <div className="container">
            {error}
            {searchString ?
                isLoading ?  <LoadSpinner/>   : <Page title={'We have found:'} data={data} />
                :navigate('/')
            }
        </div>
    );
};

export default SearchPage;