import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/views/card/card';

function Page({ title, data }) {
  const emptyDataMessage = 'Oops! Books not found';
  const style = {
    fontWeight: 600,
    fontSize: 24,
    color: '#B5B5B5',
  };
  return (
    <div className="container">
      <div className="page-wrapper">
        <h2>{title}</h2>
        <div className="book-wrapper">
          {data?.length === 0 ? <h2 style={style}>{emptyDataMessage}</h2>
          // eslint-disable-next-line react/jsx-props-no-spreading
            : data?.map((item) => <Card key={item.id} {...item} />)}
        </div>
      </div>
    </div>
  );
}

export default Page;

Page.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  })).isRequired,
};
