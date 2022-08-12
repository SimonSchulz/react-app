import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Column({ title, data }) {
  return (
    <div className="column">
      <div className="title">{title}</div>
      <ul className="footer-list">
        {data.map((el, i) => (
          <li key={i}>
            {' '}
            <Link to="/">{el}</Link>
            {' '}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Column;

Column.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
  ])).isRequired,
};
