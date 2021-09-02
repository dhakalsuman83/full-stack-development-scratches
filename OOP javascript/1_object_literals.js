const book1 = {
    title: 'Book One',
    author: "Suman Dhakal",
    year: '2013',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year} `
    }
}

console.log(book1.getSummary())

const book2 = {
    title: 'Book Two',
    author: "Suman Dhakal",
    year: '2015',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year} `
    }
}

console.log(book2.getSummary())

console.log(Object.values(book1))    // Object.value(obj_name) gives back the array of values in the object. 
console.log(Object.keys(book1))    // Object.keys(obj_name) gives back the array of keys in the object. 



//here we can see if you want to create two different books then we have to create the object for each book and also there is getsummary function twice written and here comes the concept of the constructor.