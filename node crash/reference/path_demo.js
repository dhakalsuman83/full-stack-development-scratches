const path = require('path');


//Base File name  : displays only the name of the filename which you want to access.
console.log(path.basename(__filename));

//directory name
console.log(path.dirname(__filename));

//File Extension
console.log(path.extname(__filename));

//Create Path Object
console.log(path.parse(__filename));


//concadenate path
console.log(path.join(__dirname, 'test', 'hello.html'))