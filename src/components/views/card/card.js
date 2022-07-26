import React from 'react';
import "./card.scss"
const Card = ({book}) => {
    return (
        <div className="book-card">
            <img src={book.imageUrl} alt={book.bookname}/>
            <div>
                <p className="bookname">{book.name}</p>
                <p className="author">{book.author}</p>
                <button className="order-btn">Order</button>
            </div>
        </div>
    );
};
export default Card;