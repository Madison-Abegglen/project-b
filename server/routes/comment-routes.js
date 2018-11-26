const router = require('express').Router()
let Comment = require('../models/Comment')

// logger
router.get('/', (req, res, next) => {
  console.log('COMMENT LOGGER')
  next()
})

// gets all comments
router.get('/', (req, res, next) => {
  // returns all comments from db
  Comment.find({})
    .then(comments => {
      res.send(comments)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// get comment by id
router.get('/:id', (req, res, next) => {
  Comment.findById(req.params.id)
    .then(comment => {
      res.send(comment)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// create a comment
router.post('/', (req, res, next) => {
  Comment.create(req.body)
    .then(comment => {
      res.send(comment)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// edit a comment
router.put('/:id', (req, res, next) => {
  Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(comment => {
      res.send(comment)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// delete a comment
router.delete('/:id', (req, res, next) => {
  Comment.findByIdAndRemove(req.params.id)
    .then(deletedComment => {
      res.send("DELORTED")
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// below is export default
module.exports = router