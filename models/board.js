const mongoose = require('mongoose')
const Schema = mongoose.Schema

const boardSchema = new Schema({
  square: Number,
  user: Object

}, {
  timestamps: true
})

module.exports = mongoose.model('Board', boardSchema)
