// require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const session = require('express-session')
const signupRouter = require('./routes/signup')
const loginRouter = require('./routes/login')
// const sessionConfig = require('./session') // IF IMPORTING SESSION CONFIG FROM EXTERNAL FILE

const app = express()
const PORT = process.env.PORT || 2000

// body parser
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(morgan('dev'))

// view engine - IGNORED FOR TODAY

// Session config
app.use(session({
  cookie: {
    maxAge: 1000 * 60 * 60 * 24
  },
  name: 'mrcoffee_sid',
  resave: false,
  saveUninitialized: false,
  secret: process.env.SESS_SECRET
}))

// app.use(session(sessionConfig)) // IF IMPORTING CONFIG FROM EXTERNAL FILE

// route middleware
app.use('/signup', signupRouter)
app.use('/login', loginRouter)

app.get('/login', (req, res) => {
  res.send(req.query.message)
})

app.listen(PORT, () => console.log(`App is listening at http://localhost:${PORT}`))