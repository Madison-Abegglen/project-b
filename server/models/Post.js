let mongoose = require('mongoose')
let Schema = mongoose.Schema

// define schema
let schema = new Schema({
  title: { type: String, required: true, minlength: 3, maxLength: 30 },
  content: { type: String, required: true, minlength: 1, maxLength: 500 },
  link: { type: String },
  imgUrl: { type: String },
  author: { type: String, required: true }
})

module.exports = mongoose.model('Post', schema)