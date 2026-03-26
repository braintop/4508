function return_units(num1){
    return num1 % 10;
}
function return_tens(num1){
    return Math.floor(num1 / 10);
}
function sum_2_digits_numbers1(number){//87
    let sum =  return_units(number) + return_tens(number);
    return sum;
}

function  sum_2_digits_numbers2(number){
    let sum =  number % 10 + Math.floor(number / 10);
    return sum;
}

let number = +prompt("Enter first number");
let result = return_units(number);
alert("The units are " + result);

let number2 = +prompt("Enter first number");
let result2 = return_tens(number2);
alert("The tens are " + result2);