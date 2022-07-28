import React from 'react';
import "./card.scss"
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {setOrder} from "../../../redux/slices/orderSlice/orderSlice";


const Card = ({id, formats, title, authors}) => {
    const dispatch = useDispatch();
    const handleOrderDispatch = (id) =>{
        dispatch(setOrder(id));
    }
    return (
        <div className="card-wrapper">
            <Link to={`/${id}`}>
                <div className="book-card">
                    <img src={formats['image/jpeg']} alt={title}/>
                    <div className="card-info">
                        <p className="bookname">{title.split(':')[0]}</p>
                        <p className="author">{authors[0].name}</p>
                    </div>
                </div>
             </Link >
            <button onClick={()=>handleOrderDispatch(id)}>available</button>
        </div>
    );
};
export default Card;
Card.propTypes = {
    id: PropTypes.number,
    formats: PropTypes.object,
    title: PropTypes.string,
    authors: PropTypes.array
}