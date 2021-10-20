// Write a function `hasValue` that takes an object and a value as arguments, and returns whether that value is found in the object.

// The value must be found as a value, not as a key.

// Here are a few test cases:

// Test:   hasValue({"hello": "bonjour", "my": "mon"}, "bonjour")
// Return:
// ```true
// ```

// Test:   hasValue({"hello": "bonjour", "my": "mon"}, "hello")
// Return:
// ```false
// ```

// Test:   hasValue({"hello": "bonjour", "my": "mon"}, "tasty")
// Return:
// ```false
// ```
function hasValue(obj, value) {
  objValues = Object.values(obj);
  return objValues.includes(value);
}

console.log(hasValue({ hello: "bonjour", my: "mon" }, "hello"));
