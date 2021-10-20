// Write a function `rmCensored` that takes an object as argument, and will remove any property where the key and/or the value contains a `*`.

// You have to modify the object *in-place*, you don't create a new one.

// Here are a few test cases:

// Test sequence:
// ```var swearWords = {"s*it": "m*rde", "sweet jesus": "doux jesus", "f***": "", "omg": "w*sh"}
// rmCensored(swearWords)
// console.log(swearWords)
// ```
// Output:
// ```{ 'sweet jesus': 'doux jesus' }
// ```

// Test sequence:
// ```var veggies = {"potato": "starch", "spin*ch": "green", "collard": "green", "tomato": "fr*it"}
// rmCensored(veggies)
// console.log(veggies)
// ```
// Output:
// ```{ potato: 'starch', collard: 'green' }
// ``

function rmCensored(obj) {
  count = 0;
  for (let element in obj) {
    tempString = element + obj[element];

    if (tempString.indexOf("*") > -1) delete obj[element];
    count++;
  }
}

// if (element.indexOf("*") > -1 || obj.element.indexOf("*") > -1) {
//   obj.splice();
// }
var swearWords = {
  "s*it": "m*rde",
  "sweet jesus": "doux jesus",
  "f***": "",
  omg: "w*sh",
};
rmCensored(swearWords);
console.log(swearWords);

var veggies = {
  potato: "starch",
  "spin*ch": "green",
  collard: "green",
  tomato: "fr*it",
};
rmCensored(veggies);
console.log(veggies);
