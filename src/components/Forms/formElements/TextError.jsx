import React from 'react';

function TextError(props) {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return <div className="error">{children}</div>;
}

export default TextError;
