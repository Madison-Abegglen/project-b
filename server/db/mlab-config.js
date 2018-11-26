let mongoose = require('mongoose')

const connectionString = 'mongodb://user1b:user123@ds038888.mlab.com:38888/project-b'

let connection = mongoose.connection

// establish connection to db
mongoose.connect(connectionString, {
  useNewUrlParser: true
})

// console.log any errors from db
connection.on('error', err => {
  console.log("DATABASE ERROR: ", err)
})

// confirm connection to db 
connection.once('open', () => {
  console.log("CONNECTED TO DATABASE")
})