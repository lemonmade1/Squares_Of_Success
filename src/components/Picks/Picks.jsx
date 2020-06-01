// import React from 'react'

// import CartItems from '../Board/CartItems'
// // import Squares from '../Squares/Squares'

// const Picks = () => {
//   const [squares, setSquares] = useState([])
//   const [squaresInCart, setSquaresInCart] = useState([])
//   const addToClickSquares = (square) => {
//     setSquaresInCart([
//       ...squaresInCart,
//       square
//     ])
//   }

//   const removeFromCart = (square) => {
//     const cartItems = [...squaresInCart]
//     const filteredCart = squaresInCart.filter(cartItem => cartItem.id !== square.id)
//     setSquaresInCart([
//       ...filteredCart
//     ])
//   }

//   return (
//     <>
//       <h1>PICKS</h1>
//       <CartItems
//         squaresInCart={squaresInCart}
//         setSquaresInCart={setSquaresInCart}
//       />
//     </>
//   )
// }

// export default Picks
