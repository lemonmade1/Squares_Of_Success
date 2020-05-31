import React, { Component, useState, useEffect } from 'react'

import Squares from '../Squares/Squares'
import {
  SquareHeaderX,
  SquareHeaderY
} from '../Squares/SquareHeader'
import CartItems from './CartItems'
import SquaresList from '../Squares/SquaresList'


import './Board.css'

const Board = () => {
  const [squares, setSquares] = useState([])
  const [squaresInCart, setSquaresInCart] = useState([])
  const addToClickSquares = (square) => {
    setSquaresInCart([
      ...squaresInCart,
      square
    ])
  }

  const removeFromCart = (square) => {
    const cartItems = [...squaresInCart]
    const filteredCart = squaresInCart.filter(cartItem => cartItem.id !== square.id)
    setSquaresInCart([
      ...filteredCart
    ])
  }

  return (
    <div>
      <SquareHeaderX />
      <SquareHeaderY />
      <SquaresList
        addToClickSquares={addToClickSquares}
        removeFromCart={removeFromCart}
        squaresInCart={squaresInCart}
      />
      <CartItems squaresInCart={squaresInCart} setSquaresInCart={setSquaresInCart}/>
    </div>
  )
}
export default Board
