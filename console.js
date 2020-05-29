require('dotenv').config()

// Let's us create our own node console/repl and prompt for JS code:
const repl = require('repl')

// Start REPL and provide custom prompt :)
const replServer = repl.start({
  prompt: 'Node Console> '
})

// Connect to mongodb:
require('./config/database')

// Load up our models:
const User = require('./models/user')
// const Score = require("./models/score");

replServer.context.User = User
// replServer.context.Score = Score;

console.log('\n')
console.log('========================================')
console.log(
  'Console loaded. To get all users type: User.find({}, (e, users) => { console.log(users) })'
)
console.log('========================================')
