const express = require("express");
const expressLayouts = require("express-ejs-layouts")
require('dotenv').config()


const app = express();

//template engine
app.use(expressLayouts);
app.set('layout', "./layouts/main");

app.set('view engine', 'ejs');



app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use('/', require("./routes/index"))
app.use('/users', require("./routes/users"))



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App started at http://localhost:${PORT}`)
})