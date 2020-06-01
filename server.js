const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')

// const bodyParser = require('body-parser')
// const cors = require('cors')

const data = require('./src/utils/data')

const app = express()

// app.use(bodyParser.json())
//   .use(cors())
//   .use(bodyParser.urlencoded({
//     usenewUrlParser: true
//   }))

require('dotenv').config()
require('./config/database')

app.use(logger('dev'))
app.use(express.json())

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

// API ROUTES
app.use('/api/users', require('./routes/api/users'))

app.get('/api/squares', (req, res) => {
  return res.json(data.squares)
})

app.use(require('./config/auth'))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// CONFIG TO USE PORT 3001 DURING
// DEV TO AVOID COLLISION
const port = process.env.PORT || 3001

console.log(port)

app.listen(port, () => {
  console.log(`Express app running on http://localhost:${port}`)
})
