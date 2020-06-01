import React, { Component } from 'react'

import './Squares.css'

// class Squares extends Component {
//   constructor (props) {
//     super(props)

//     this.state = {
//       value: null
//     }
//   }

//   render () {
//     return (
//       <button
//         className='square'
//         onClick={() => {
//           alert(`You clicked: Square ${this.props.value}`)
//           this.setState({ value: 'X' })
//         }}
//       >
//         {this.state.value}
//       </button>
//     )
//   }
// }

const Squares = props => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.value}
    </button>
  )
}

export default Squares
