import React, { useState } from 'react';
import './card.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { removeOrder, setOrder } from '../../../redux/slices/orderSlice/orderSlice';

function Card({
  id, formats, title, authors,
}) {
  const storeId = useSelector((store) => store.orderReducer);
  const [ordered, setOrdered] = useState(storeId.indexOf(id) === -1);
  const dispatch = useDispatch();
  const btnTitle = ordered ? 'order' : 'return';
  const style = { background: ordered ? '#FF5D4F' : '#616161' };
  const reg = /[,.!?;:()]/;
  const handleOrderDispatch = (key) => {
    if (storeId.indexOf(key) === -1) {
      dispatch(setOrder(key));
      setOrdered((state) => !state);
    } else {
      dispatch(removeOrder(key));
      setOrdered((state) => !state);
    }
  };
  return (
    <div className="card-wrapper">
      <Link to={`/details/${id}`}>
        <div className="book-card">
          <img src={formats['image/jpeg']} alt={title} />
          <div className="card-info">
            <p className="booktitle">{title?.split(reg)[0]}</p>
            <p className="author">{authors[0]?.name}</p>
          </div>
        </div>
      </Link>
      <button type="button" style={style} onClick={() => handleOrderDispatch(id)}>{btnTitle}</button>
    </div>
  );
}
export default Card;
Card.propTypes = {
  id: PropTypes.number.isRequired,
  formats: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])).isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
};
