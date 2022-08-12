import React from 'react';
import PropTypes from 'prop-types';

function View({
  formats, title, authors, languages, subjects,
}) {
  return (
    <div className="book-page-wrapper">
      <img src={formats['image/jpeg']} alt="cover" />
      <div className="book-info">
        <h2>{title.split(':')[0]}</h2>
        <h3>{authors[0]?.name}</h3>
        <h5>
          Languages:
          {languages}
        </h5>
        <div>
          <h4>Subjects:</h4>
          {subjects.map((item) => <p key={item}>{item}</p>)}
        </div>
      </div>
    </div>
  );
}
export default View;
View.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
  ])).isRequired,
  subjects: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])).isRequired,
  formats: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])).isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
};
