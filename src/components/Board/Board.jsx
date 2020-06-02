import React, { useState } from 'react'

import {
  SquareHeaderX,
  SquareHeaderY
} from '../Squares/SquareHeader'

import CartItems from './CartItems'
import SquaresList from '../Squares/SquaresList'

import './Board.css'

const Board = () => {
  // const [squares, setSquares] = useState([])
  const [squaresInCart, setSquaresInCart] = useState([])
  const addToClickSquares = (square) => {
    setSquaresInCart([
      ...squaresInCart,
      square
    ])
  }

  const removeFromCart = (square) => {
    // const cartItems = [...squaresInCart]
    const filteredCart = squaresInCart.filter(cartItem => cartItem.id !== square.id)
    setSquaresInCart([
      ...filteredCart
    ])
  }

  return (
    <div>
      <h2 className='homeAway'>L.A. Lakers</h2>
      <SquareHeaderX />
      <SquareHeaderY />
      <SquaresList
        addToClickSquares={addToClickSquares}
        removeFromCart={removeFromCart}
        squaresInCart={squaresInCart}
      />
      <h2 className='homeAway away'>L.A. Clippers</h2>
      <div className='cartDiv'>
        <CartItems
          squaresInCart={squaresInCart}
          setSquaresInCart={setSquaresInCart}
        />
      </div>

    </div>
  )
}
export default Board
