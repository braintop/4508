let firstName = "John";
let age = 20;
let message1 = "hello firstName you are age years old";
let message2 = "Hello, " + firstName + "! You are " + age + " years old.";
let message3= `Hello ${firstName}! You are ${age} years old.`;

console.log(message1);
console.log(message2);
console.log(message3);

//string = מחרוזת 
console.log(typeof message1);
console.log(typeof age);

let num = 10;

let x = num/3; //3.3333333333333335
console.log(x);

x = 10%3; //1 % = mod = שארית חילוק
x = 11%3; //2 % = mod = שארית חילוק
x = 12%3; //0 % = mod = שארית חילוק
x = 13%3; //1 % = mod = שארית חילוק
x = 14%3; //2 % = mod = שארית חילוק
x = 15%3; //0 % = mod = שארית חילוק
x = 16%3; //1 % = mod = שארית חילוק
x = 17%3; //2 % = mod = שארית חילוק
x = 18%3; //0 % = mod = שארית חילוק
x = 19%3; //1 % = mod = שארית חילוק
x = 20%3; //2 % = mod = שארית חילוק
x = 21%3; //0 % = mod = שארית חילוק
x = 22%3; //1 % = mod = שארית חילוק
x = 23%3; //2 % = mod = שארית חילוק


// alert(5 == "5");   // true (loose comparison)
// alert(5 === "5");  // false (strict comparison)
//alert(Math.random()*1000);

let n = Math.floor(Math.random()*100);
alert(n);
