const router = require('express').Router()
let Post = require('../models/Post')

// logger
router.get('/', (req, res, next) => {
  console.log('POST LOGGER')
  next()
})

// gets all posts
router.get('/', (req, res, next) => {
  // returns all posts from db
  Post.find({})
    .then(posts => {
      res.send(posts)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// get post by id
router.get('/:id', (req, res, next) => {
  Post.findById(req.params.id)
    .then(post => {
      res.send(post)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// create a post
router.post('/', (req, res, next) => {
  Post.create(req.body)
    .then(post => {
      res.send(post)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// edit a post
router.put('/:id', (req, res, next) => {
  Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(post => {
      res.send(post)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// delete a post
router.delete('/:id', (req, res, next) => {
  Post.findByIdAndRemove(req.params.id)
    .then(deletedPost => {
      res.send("DELORTED")
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// below is export default
module.exports = router