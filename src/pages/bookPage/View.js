import React from "react";
import PropTypes from "prop-types";

export const View = ({formats, title, authors,languages,subjects}) => {
    return (
        <>
            <div className="book-page-wrapper">
                <img src={formats['image/jpeg']} alt="cover"/>
                <div className="book-info">
                    <h2>{title.split(':')[0]}</h2>
                    <h3>{authors[0]?.name}</h3>
                    <h5>Languages: {languages}</h5>
                    <div>
                        <h4>Subjects:</h4>
                        {subjects.map((item, i)=><p key={i}>{item}</p>)}
                    </div>

                </div>
            </div>}
        </>
    );
};
View.propTypes = {
    id: PropTypes.number,
    formats: PropTypes.object,
    title: PropTypes.string,
    authors: PropTypes.array
}