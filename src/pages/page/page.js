import React, {useState} from 'react';
import PropTypes from 'prop-types';
import LoadSpinner from "../../components/views/Spinner/spinner";
import Card from "../../components/views/card/card";
import ErrorMessage from "../../components/views/errorMessage/errorMessage";
import {useGetBookByIdQuery} from "../../redux/slices/api/apiSlice";

const Page = ({title, id}) => {
    const [viewBooks, setViewBooks] = useState(8);
    const handleChange = () => setViewBooks(state => state+4);
    const {
        data,
        isLoading,
        isError,
    } = useGetBookByIdQuery(id);
    const style = {
        margin: "150px auto",
        fontWeight: 600,
        fontSize: 24,
        color: '#B5B5B5'
    }
    const error = isError ? <ErrorMessage/> : null;
    return (
        <div className="container page-wrapper">
            <h2>{title}</h2>
            <div className="book-wrapper">
                {error}
                {title ==='My orders' && id.length ===0 ? <h2 style={style}>Oops! You haven't added any book yet</h2>:
                isLoading ? <LoadSpinner/> : data.results.map((item,i) =>{
                    if(i<viewBooks){return <Card key={item.id} {...item} />}}
                )}
            </div>
            { id?.length===0 || data?.results.length <= viewBooks ? null : <button className="show-more-btn" onClick={handleChange} >Show more</button>}
        </div>
    );
};

export default Page;

Page.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string ||  PropTypes.array
}