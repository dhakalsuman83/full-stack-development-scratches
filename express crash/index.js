const express = require('express')
const data = require('./data')
const app = express()
const PORT = 3000
//const port = process.env.port||3000


console.log(data.users)

//GET request


app.get("/users/:id", (req, res) => {
    res.send(`Your ID is ${req.params.id}`)
})






app.listen(PORT, () => {
    console.log(`App listening at: http://localhost:${PORT}`)
})