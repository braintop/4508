const map = new Map();

// Object as key

// Number as key
map.set(42, "The answer");
console.log(map.get(42)); // "The answer"

// Boolean as key
map.set(true, "Yes!");

// Function as key
const fn = () => "hello";
map.set(fn, "A function");
console.log(map.get(fn)); // "A function"