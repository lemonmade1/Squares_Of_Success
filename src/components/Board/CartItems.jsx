import React, { useState, useEffect } from 'react'

const CartItems = ({ squaresInCart }) => {
  const [totalCartPrice, setTotalCartPrice] = useState(0)

  const getTotalCartPrice = () =>
    squaresInCart.map(square => square.price).reduce((a, b) => a + b)

  // Below in setSquares pass it data returned from database
  useEffect(() => {
    const cartPrice = squaresInCart.length ? getTotalCartPrice() : 0
    setTotalCartPrice(cartPrice)
  }, [squaresInCart])

  return (
    <>
      {squaresInCart.map((cartItem, index) => (
        <div key={`squareKey-${index}`}>
          <p>
            You picked Square {cartItem.id} /{' '}
            <span>Price: ${cartItem.price}</span>
          </p>
          <br />
        </div>
      ))}
      <h1> Total: ${totalCartPrice}</h1>
    </>
  )
}

export default CartItems
