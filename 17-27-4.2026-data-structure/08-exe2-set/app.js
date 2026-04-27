// set-operations.js

// 1. Set operations on two arrays
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

// a) Union
const union = new Set([...arr1, ...arr2]);
console.log("Union:", union);
// [1, 2, 3, 4, 5, 6, 7]

// b) Intersection
const setB = new Set(arr2);
const intersection = arr1.filter(x => setB.has(x));
console.log("Intersection:", intersection);
// [3, 4, 5]

// c) Difference
const difference = arr1.filter(x => !setB.has(x));
console.log("Difference:", difference);
// [1, 2]

// 2. Unique tags from user objects
const users = [
  { name: "Alice", tags: ["js", "react"] },
  { name: "Bob", tags: ["css", "js"] },
  { name: "Charlie", tags: ["react", "node"] }
];
let allTags = new Set();
for (let user of users) {

    for (let tag of user.tags) {
        allTags.add(tag);
    }
}
console.log("Unique tags:", allTags);
// ["js", "react", "css", "node"]

// 3. removeDuplicates function
function removeDuplicates(arr) {
    let arr = new Set(arr);
   return arr; 
}
console.log(removeDuplicates([1, 2, 2, 3, 1, 4, 3]));
// [1, 2, 3, 4]
