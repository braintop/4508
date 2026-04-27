// Create a Map
const userRoles = new Map();

// Set key-value pairs
userRoles.set("Alice", "admin");
userRoles.set("Bob", "editor");
userRoles.set("Charlie", "viewer");
console.log(userRoles);


// // Get a value
console.log(userRoles.get("Alice")); // "admin"

// // Check if key exists
console.log(userRoles.has("Bob")); // true

// Delete a key
userRoles.delete("Charlie");
console.log(userRoles);

// // Size
console.log(userRoles.size); // 2

// // Clear all entries
// // userRoles.clear();