//3_prototype.js
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year; 
}


//getting the summary of the book
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`
} 


//get the age of the book
Book.prototype.getAge = function () {
    const age = new Date().getFullYear() - this.year
    return `${this.title} is ${age} years old`
}

//change the year of the book .i.e when revised
Book.prototype.revise = function (newYear) {
    this.year = newYear
    this.revised= true
}



//getSummary prototype 

//here we can see we reduced the code using the constructor by defining the function inside the constructor

const book1 = new Book('book one', 'Suman Dhakal', '2019')
const book2 = new Book('book two', 'Suman Dhakal', '2021')
// console.log(book2.getSummary())
// console.log(book1.getSummary())
console.log(book1)   //befor revised


book1.revise('2022') //calling the revised method

console.log(book1)//after the revised date