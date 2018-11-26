let express = require('express')
let bp = require('body-parser')
let server = express()
let port = 3000

require('./server/db/mlab-config')

// middleware
server.use(express.static(__dirname + '/public')) // connection to front-end
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))

// routes
let userRoutes = require('./server/routes/user-routes')
let postRoutes = require('./server/routes/post-routes')
let commentRoutes = require('./server/routes/comment-routes')

server.use('/api/users', userRoutes)
server.use('/api/posts', postRoutes)
server.use('/api/comments', commentRoutes)

// the catch-all
server.get('*', (req, res, next) => {
  res.status(404).send("NO MATCHING ROUTE")
})
server.listen(port, () => {
  console.log("SERVER RUNNING ON PORT: ", port)
})