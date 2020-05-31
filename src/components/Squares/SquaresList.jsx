import React, {useState, useEffect} from 'react'
import Squares from './Squares'
import squaresData from '../../utils/data'

const SquaresList = ({removeFromCart, addToClickSquares, squaresInCart}) => {
  const [squares, setSquares] = useState([])

  useEffect(() => {
    setSquares(squaresData.squares)
  }, [squares])
  
  return (
    <div className='boardGrid'>
      {squares.length > 0 && squares.map((square, index) => {
        const isIncluded = squaresInCart.includes(square)
        const squareClassName = isIncluded ? 'red' : ''
        return (
          <React.Fragment key={`square-${index}`}>
            <Squares
              key={`square-${index}`}
              value={square.id}
              className={squareClassName}
              onClick={() => {
                console.log('clicked included', squareClassName)
                isIncluded ? removeFromCart(square) : addToClickSquares(square)
              }}
            />
          </React.Fragment>
        )
      }
      )}
  </div>
  )
}
export default SquaresList
