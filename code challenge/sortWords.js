// Write a function `sortWords` that takes an array of strings as argument, and returns an object.

// That object will have two keys `odd` and `even`.
// The key `odd` will be associated to an array of the odd-length strings.
// The key `even` will be associated to an array of the even-length strings.

// Here are a few test cases:

// Test:   sortWords([])
// Return:
// ```{ odd: [], even: [] }
// ```

// Test:   sortWords(["work", "hard", "mommy"])
// Return:
// ```{ odd: [ 'mommy' ], even: [ 'work', 'hard' ] }
// ```

// Test:   sortWords(["oh!", "ah!", "hi", "my"])
// Return:
// ```{ odd: [ 'oh!', 'ah!' ], even: [ 'hi', 'my' ] }
// ```

function sortWords(arr) {
  let sortObj = {};
  sortObj.odd = [];
  sortObj.even = [];
  arr.forEach((arrayElement) => {
    if (arrayElement.length % 2 !== 0) {
      sortObj.odd.push(arrayElement);
    } else {
      sortObj.even.push(arrayElement);
    }
  });
  return sortObj;
}
console.log(sortWords(["work", "hard", "mommy"]));
