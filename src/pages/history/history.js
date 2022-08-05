import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useGetBookByIdQuery} from "../../redux/slices/api/apiSlice";
import LoadSpinner from "../../components/views/Spinner/spinner";
import Page from "../page/page";
import {clearHistory} from "../../redux/slices/historySlice/historySlice";
import ErrorMessage from "../../components/views/errorMessage/errorMessage";
import {Link} from "react-router-dom";
import "./history.scss"

const History = () => {
    const dispatcn = useDispatch();
    const history = useSelector(state=>state.historyReducer);
    const handleClearHistory=()=>{
        dispatcn(clearHistory());
    }
    const {
        data,
        isLoading,
        isError,
    } = useGetBookByIdQuery(history.ids);
    const error = isError ? <ErrorMessage/> : null;
    return (
        <div className='container'>
            {history.ids.length ===0 && history.search.length ===0 ? null:<button className='clear-history' onClick={handleClearHistory} >clear history</button>}
            {error}
            {history.ids.length ===0 && history.search.length ===0 ?<h2 className="empty">Oops! History is empty</h2>:null}
            {isLoading ? <LoadSpinner/> :
                history.ids.length ===0 ? null : <Page title={'You looked at these books:'} data={data}/>}
            <div className="history-requests">
                {history.search.length !==0 ? <h2>Your requests:</h2>:null}
                {history.search ? history.search.map(i=> <div key={i}><Link to={`/search/${i}`}>{i}</Link></div>)
                    : <h2 className="empty">You didn't search for anything</h2>}
            </div>
        </div>
    );
};

export default History;