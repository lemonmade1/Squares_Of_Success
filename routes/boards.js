const express = require('express')
const router = express.Router()

const boardsCtrl = require('../controllers/boards')

/* ||||||||||| Public Routes ||||||||||| */
router.get('/squares', boardsCtrl.getAllSquares)
router.get('/', boardsCtrl.index)
router.post('/', boardsCtrl.addSquares)

module.exports = router
