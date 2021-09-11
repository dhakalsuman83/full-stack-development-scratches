const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const loginRouter= require('./routes/login')
const registerRouter= require('./routes/register')


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

//login route
app.use('/login', loginRouter)

//register route
app.use('/register',registerRouter)


PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
})