let mongoose = require('mongoose')
let bcrypt = require('bcryptjs')
let Schema = mongoose.Schema
const SALT = 15
let name = "User"

let schema = new Schema({
  email: { type: String, required: true, unique: true },
  hash: { type: String, required: true },
  favorites: { type: String }
})

schema.statics.hashPassword = function (password) {
  return bcrypt.hashSync(password, SALT)
}

schema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.hash) // use async to prevent bottlenecking
}

let model = mongoose.model(name, schema)

module.exports = model