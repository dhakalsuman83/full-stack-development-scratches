const express = require('express');
const app = express();

app.set("view engine", "ejs")
app.use(express.static('public'))


app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('home')
})

const PORT = 1000;
app.listen(PORT, () => {
    console.log(`app listening at http://localhost:${PORT}`)
})



