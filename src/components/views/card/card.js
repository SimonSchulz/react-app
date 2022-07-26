import React from 'react';
import "./card.scss"
const Card = ({book}) => {
    return (
        <div className="book-card">
            <img src={book.formats['image/jpeg']} alt={book.title}/>
            <div>
                <p className="bookname">{book.title}</p>
                <p className="author">{book.authors[0].name}</p>
                <button className="order-btn">Order</button>
            </div>
        </div>
    );
};
export default Card;