const fs = require('fs')   //file modules
const path = require('path')    //path modules

//create a folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err
//     console.log("Folder Created")
// });

//create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),
//     "Hello World",
//     err => {
//     if (err) throw err
//     console.log("File written to...")
//     })

//appending to the exixting filename

// fs.appendFile(path.join(__dirname, '/test', 'hello.txt'),
//     "Hello World 2",
//     err => {
//     if (err) throw err
//     console.log("File written to...")
// })


//readfile

// fs.readFile(path.join(__dirname, '/test', "hello.txt"), 'utf8', (err, data) => {
//     if (err) throw err
//     console.log(data)
// })


//rename a file
fs.rename(path.join(__dirname, '/test', 'hello.txt'),
    path.join(__dirname, '/test', 'helloworld.txt'),
    err => {
        if (err) throw err
        console.log("File renamed to .....")
})
