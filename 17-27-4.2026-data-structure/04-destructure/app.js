const scores = [


    ["Alice", 95, true],
    ["Bob", 87,false],
    ["Charlie", 92,true]
  

];
let firstname, score, admin = scores[0];//destructuring [alice, 95]
console.log(firstname, score);

for (let i = 0; i < scores.length; i++) {
    let item = scores[i];
    let firstname, score, admin = item;
    console.log(firstname, score, admin);
}

console.log(scores);

//   // for...of with destructuring
//   for (const [name, score] of scores) {
//     console.log(`${name}: ${score}`);
//   }
  
//   // forEach
//   scores.forEach((value, key) => {
//     console.log(`${key}: ${value}`);
//   });
  
//   // Convert to array
//   const arr = [...scores]; // Array of [key, value] pairs