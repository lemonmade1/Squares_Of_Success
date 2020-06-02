import React, { useState, useEffect } from 'react'

const shuffle = (array) => {
  let currentIndex = array.length; let temporaryValue; let randomIndex

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

export const SquareHeaderX = () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [randomNumbers, setRandomNumbers] = useState([])
  const [
    shuffled,
    setShuffled
  ] = useState(false)

  // Change shuffle to random numbers to display
  useEffect(() => {
    console.log(shuffled)
    if (shuffled) return
    setRandomNumbers(shuffle(numbers))
    setShuffled(true)
  }, [])
  return (
    <div className='squareHeaderGridX'>
      {
        randomNumbers.map((header, index) => (
          <div key={`topHeader-${index}`}>{header}</div>
        ))
      }
    </div>
  )
}

export const SquareHeaderY = () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [randomNumbers, setRandomNumbers] = useState(numbers)
  const [shuffled, setShuffled] = useState(false)

  // Change shuffle to random numbers to display
  useEffect(() => {
    if (shuffled) return
    setRandomNumbers(shuffle(randomNumbers))
    setShuffled(true)
  }, [shuffled, randomNumbers])
  return (
    <div className='squareHeaderGridY'>
      {
        randomNumbers.map((header, index) => (
          <div key={`header-${index}`}>{header}</div>
        ))
      }
    </div>
  )
}
