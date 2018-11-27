let router = require('express').Router()
let Users = require('../models/User')

// login
// creating a new session
router.post('/login', (req, res, next) => {
  Users.findOne({ email: req.body.email })
    .then(user => {
      if (!user) { return next(new Error("Invalid Username or Password")) }
      if (!user.validatePassword(req.body.password)) { return next(new Error("Invalid Username or Password")) }
      delete user._doc.hash
      res.send(user)
    })
    .catch(next)
})

// register
router.post('/register', (req, res, next) => {
  let hash = Users.hashPassword(req.body.password)
  Users.create({ email: req.body.email, hash })
    .then(user => {
      delete user._doc.hash
      res.send(user)
    })
    .catch(err => {
      next(new Error("Invalid Username or Password"))
    })
})

module.exports = router