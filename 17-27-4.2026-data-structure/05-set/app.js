// Create a Set
const colors = new Set();

// Add values
colors.add("red");
colors.add("blue");
colors.add("green");
colors.add("red"); // Duplicate - ignored!

console.log(colors.size); // 3 (not 4)

// Check if value exists
console.log(colors.has("blue")); // true

// Delete a value
colors.delete("green");

// Create from array (removes duplicates)
const nums = new Set([1, 2, 3, 2, 1, 4]);
console.log(nums); // Set {1, 2, 3, 4}
console.log(nums.size);
for (let num of nums) {
    console.log(num);
}

const arr1 = Array.from(nums);
console.log(arr[1]);


let friends = ["John", "Jane", "Jim", "Jill", "Jack", "Jim"];
let friendsSet = new Set(friends);//["John", "Jane", "Jim", "Jill", "Jack"]
console.log(friendsSet);
console.log(friendsSet.size);
for (let friend of friendsSet) {
    console.log(friend);
}

const arr = Array.from(friendsSet);
console.log(arr[1]);

