//learning this keyword.
//this references the object that is executing the current function  

//if the function is part of an object, we call it an method.  so if the function is an method of an object, this keyword represents the object itself
// if method -> represents object

//otherwise if the function is a regular function, that means its not part of the object, so it will represent the global object i.e window object in the browser 
//  and global object in the node.   if function -> represents the global(window,global)

//example 1     here play() is the method of the object video. Hence this will represent the video object

// const video = {
//     title: 'a',
//     play() {
//         console.log(this);
//     }
// };
// video.play();



//Example 2 : here we are going to create the method of the object outside thhe object and see the this keyword

// const video = {
//     title: 'a',
//     play() {
//         console.log(this);
//     }
// };

// video.stop = function (){      // here again the stop is the method of the video object so this will represent the object video itself
//     console.log(this);
// };

// video.stop();



//Example 3////with regular function

// const video = {
//     title: 'a',
//     play() {
//         console.log(this);
//     }
// };

// function playVideo() {
//     console.log(this)         //here the this keyword is representing the global object no the object we have defined
// };
// playVideo()



//Example 4   //now lets see when we create the new object through constructor


// function Time(timeinmin, timeinhours) {
//         this.timehr = timeinhours;
//         this.timemin = timeinmin;
// }

// let t = new Time(12, 2)    //whenever we call the constructor, the new operator create the new empty object and in the constructor function, if we use the tih keyword, it represents the newly created object
// console.log(t)



//
// const video = {
//     title: 'a',
//     tags : ['a','b','c'],
//     showTags() {
//         this.tags.forEach(function(tag) {    //here if we want to put the video title  infront of the tags and use this in the call back function, that this will represent the global window and there will be no expected output.    //the solution is given below
//             console.log(this,tag)
//         })
//     }
// }

video.showTags()

const video = {
    title: 'a',
    tags : ['a','b','c'],
    showTags() {
        this.tags.forEach(function(tag) {    //but for Each function can have two parameters: one is call back function and the other one can be array , object anything and the this keyword in the call back function will represent the passed object as an parameter.
            console.log(this.title,tag)
        },this)
    }
}

video.showTags()
