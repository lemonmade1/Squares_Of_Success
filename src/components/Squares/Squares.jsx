import React from 'react'

import './Squares.css'

const Squares = props => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.value}
    </button>
  )
}

export default Squares
