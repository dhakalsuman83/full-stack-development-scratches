//module wrapper function
//(function (exports, require, module, __filename,  __dirname){

//})


// const Person = require('./person');


// const person1 = new Person('Suman Dhakal', 26);

// person1.greeting();

// const Logger = require('./logger')


// const logger = new Logger()

// logger.on('message', (data) => console.log('Called Listener:', data))

// logger.log('hello world')

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.write("Hello World")
    console.log(req.url)
})

const PORT = process.env.PORT || 5000


server.listen(PORT, () => console.log('server listening at:',PORT))