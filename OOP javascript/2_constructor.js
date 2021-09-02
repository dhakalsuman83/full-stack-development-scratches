//2_constructor.js
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function() {
        return `${this.title} was written by ${this.author} in ${this.year} `
    }  
}

//here we can see we reduced the code using the constructor by defining the function inside the constructor

const book1 = new Book('book one', 'Suman Dhakal', '2019')
const book2 = new Book('book two', 'Suman Dhakal', '2021')
console.log(book2.getSummary())
console.log(book1.getSummary())

console.log(book1)   //while printing the object book1 , we can see the getsummary function as well as while there could be possibility that we might only want the deatils of the book not the summary for every book

//hence here comes the concept of the prototype.



