const Board = require('../models/board')

const index = (req, res) => {
  Board.find({}, (_err, board) => {
    res.json(board)
  })
}

// CREATE SQUARES
const addSquares = (req, res) => {
  const squares = {
    user: req.body.user,
    squareNum: req.body.id
  }
  try {
    console.log('req.body', req.body)
    const newBoard = new Board({ user: {}, squareNum: req.body.id })
    console.log('Board model', newBoard.toString())
    newBoard.save()
    res.status(200)
  } catch (err) {
    throw new Error('Board not created')
  }
}

//   // DELETE
const delComment = (req, res) => {
  Squares.findByIdAndRemove(req.params.id, (_err, _data) => {
    res.redirect('/squares', 301, {
      user: req.user
    })
  })
}

const getAllSquares = (req, res) => {
  const squares = Board.find({}, (err, result) => {
    if (err) throw new Error(err)

    res.redirect('/', 200, {
      squares: result
    })
  })
}

module.exports = {
  index,
  addSquares,
  getAllSquares,
  delComment
}
