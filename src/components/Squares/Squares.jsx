import React from 'react';

import './Squares.css';

const Squares = (props) => {
  return (
    <button
      className="square"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

export default Squares;