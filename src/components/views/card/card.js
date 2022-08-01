import React, {useState} from 'react';
import "./card.scss"
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {setOrder,removeOrder} from "../../../redux/slices/orderSlice/orderSlice";


const Card = ({id, formats, title, authors}) => {
    const storeId =  useSelector(store=> store.orderReducer);
    const [ordered, setOrdered] = useState(storeId.indexOf(id)===-1)
    const dispatch = useDispatch();
    let btnTitle = ordered ?  "order": "return";
    const style = {'background': ordered ? '#FF5D4F' : '#616161'};
    const handleOrderDispatch = (id) =>{
        if(storeId.indexOf(id)===-1){
            dispatch(setOrder(id));
            setOrdered(state=>!state);
        } else {
            dispatch(removeOrder(id));
            setOrdered(state=>!state);
        }
    }
    return (
        <div className="card-wrapper">
            <Link to={`/${id}`}>
                <div className="book-card">
                    <img src={formats['image/jpeg']} alt={title}/>
                    <div className="card-info">
                        <p className="bookname">{title?.split(':')[0]}</p>
                        <p className="author">{authors[0]?.name}</p>
                    </div>
                </div>
             </Link >
            <button style={style} onClick={()=>handleOrderDispatch(id)}>{btnTitle}</button>
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