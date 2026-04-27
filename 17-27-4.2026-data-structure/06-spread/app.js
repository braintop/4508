// 1. Create a Map
const phoneBook = new Map([
    ["Alice", "050-1234567"],
    ["Bob", "052-7654321"],
    ["Charlie", "054-1111111"],
    ["David", "053-2222222"],
    ["Eve", "050-3333333"]
  ]);
  
  // 2. Add, update, delete
  phoneBook.set("Frank", "055-4444444");  // Add new
  phoneBook.set("Alice", "050-9999999");  // Update existing
  phoneBook.delete("David");               // Delete
  
  // 3. Check existence
  console.log(phoneBook.has("Alice"));  // true
  console.log(phoneBook.has("David"));  // false (deleted)
  console.log("Size:", phoneBook.size); // 5
  
  // 4. Iterate
  for (const item of phoneBook) {
    console.log(item[0], item[1]);
  }
  
let arr = [1,2,3,34]
for (let num of arr) {
    console.log(num);
}

