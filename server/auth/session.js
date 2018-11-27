let expressSession = require('express-session')
let MongoStore = require('connect-mongodb-session')(expressSession)

let store = new MongoStore({
  uri: 'mongodb://user1b:user123@ds038888.mlab.com:38888/project-b', // your specific mongo db
  collection: "Sessions"
})

store.on('error', error => {
  console.error('[SESSION ERROR]', error)
})

let session = expressSession({
  secret: process.env.SESSIONSECRET || "The cookies are pretty good",
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 365
  },
  store,
  resave: true,
  saveUninitialized: true
})

module.exports = session