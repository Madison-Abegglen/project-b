let mongoose = require('mongoose')
let Schema = mongoose.Schema

// define schema
let schema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
})

module.exports = mongoose.model('User', schema)