const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const session = require('express-session')
const loginRouter= require('./routes/login')
const registerRouter = require('./routes/register')
const homeRouter = require('./routes/home')
const { routeToLogin, routeToHome } = require('./middlewares/middleware')
const userDetails = require('./middlewares/userDetails')


const app = express();

//setting view enginne and layouts
app.use(expressLayouts)
app.set("layout", "./layouts/main")

app.set('view engine', 'ejs')

//body parsers
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

//session
app.use(session({
    cookie: {
        maxAge: 1000 * 60 * 60 * 5
    },
    name: "session.sid",
    resave: false,
    saveUninitialized: false,
    secret: process.env.SECRET_SESS_KEY
}))



//middleware for sharing details of the user



//login route
app.use('/login',userDetails, routeToHome, loginRouter)

//register route
app.use('/register',userDetails,routeToHome, registerRouter)

//home/dashboard route
app.use(homeRouter) 





PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
})
