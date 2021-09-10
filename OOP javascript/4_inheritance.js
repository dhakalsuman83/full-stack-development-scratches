//4_inheritance.js
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year; 
}


//getting the summary of the book
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`
} 


