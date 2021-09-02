
let obj ={name:'suman'}

const video = {
    title: 'a',
    tags : ['a','b','c'],
    showTags() {
        this.tags.forEach(function(tag) {    //but for Each function can have two parameters: one is call back function and the other one can be array , object anything and the this keyword in the call back function will represent the passed object as an parameter.
            console.log(this.name,tag)
        },obj)
    }
}

video.showTags()