let mongoose = require('mongoose')
let Schema = mongoose.Schema

// define schema
let schema = new Schema({
  content: { type: String, required: true, minlength: 1, maxLength: 250 },
  author: { type: String, required: true }
})

module.exports = mongoose.model('Comment', schema)