const url = require('url')   //url module

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active')

//serialized URL
console.log(myUrl.toString())
console.log(myUrl.href)

//host domain....it gives the port number as well
console.log(myUrl.host)

//hostname  it doesn't get the port number
console.log(myUrl.hostname)

//pathname
console.log(myUrl.pathname)

//serialized query   .....basically after the question mark
console.log(myUrl.search) //if we want to create an object from this we can use searchparams

//params object
console.log(myUrl.searchParams)

//ADD param

myUrl.searchParams.append('abc','123')

console.log(myUrl.searchParams)

//loop
myUrl.searchParams.forEach((value,key) => {
    console.log(`${key}: ${value}`)
    
})

console.log(typeof myUrl.searchParams)

console.log(Array.isArray(myUrl.searchParams));

