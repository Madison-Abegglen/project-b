let express = require('express')
let bp = require('body-parser')
let server = express()
const PORT = process.env.PORT || 3000

require('./server/db/mlab-config')

// middleware
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))
server.use(express.static(__dirname + '/public')) // connection to front-end

// routes
let auth = require('./server/auth/auth-routes')
let postRoutes = require('./server/routes/post-routes')
let commentRoutes = require('./server/routes/comment-routes')

server.use(auth.session)
server.use('/account', auth.router)
server.use('/api/posts', postRoutes)
server.use('/api/comments', commentRoutes)

server.use('*', (req, res, next) => {
  if (req.method == "GET") {
    return next()
  }
  next(new Error("Please login to continue"))
  // makes sure user is logged in & has permission to create/delete posts, make comments, etc
})

// the catch-all
server.use('*', (error, req, res, next) => {
  res.status(error.status || 404).send({ message: error.message })
})

// sets server to listen on your specific port 
server.listen(PORT, () => {
  console.log("SERVER RUNNING ON PORT: ", PORT)
})