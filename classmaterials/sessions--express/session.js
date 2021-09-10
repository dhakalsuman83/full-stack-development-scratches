const sessionConfig = {
  cookie: {
    maxAge: 1000 * 60 * 60 * 24
  },
  name: 'mrcoffee_sid',
  resave: false,
  saveUninitialized: false,
  secret: process.env.SESS_SECRET
}

module.exports = sessionConfig

