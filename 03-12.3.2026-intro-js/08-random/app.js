let random1 = Math.random(); // 0=<x<1 
console.log(random1);

let random2 = Math.floor(Math.random()*100); // 0=<x<100
console.log(random2);

let random3 = Math.floor(Math.random()*40); // 0=<x<40
console.log(random3);


//40<x<60
let random4 = 40 + Math.floor(Math.random()*20); // 40=<x<60
console.log(random4);

let min = 100;
let max = 500;
let random5 = min + Math.floor(Math.random()*(max-min)); // min=<x<max
console.log(random5);


