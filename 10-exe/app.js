console.log(str);

function add(num1, num2){
    return num1 + num2;
}

function multiply(num1, num2){
    return num1 * num2;
}
function print_multiply(num1, num2){
    console.log(num1 * num2);
}

let a = +prompt("Enter first number");
let b = +prompt("Enter second number");
let result = add(a, b);
alert("The result is " + result);


let x  = add(100, 200);
alert(x);

let firstNumber = +prompt("Enter first number");
let secondNumber = +prompt("Enter second number");
let result2 = multiply(firstNumber, secondNumber);
alert("The result is " + result2);

print_multiply(firstNumber, secondNumber);


function ten_stars(){
    for(let i=0;i<10;i++){
        console.log("*" + i);
    }
}

ten_stars();


function print_stars(n1, n2){
    if(n1 > n2){
        let temp = n1;
        n1 = n2;
        n2 = temp;
    }
    for(let i=n1;i<n2;i++){
        console.log(i);
    }
}
let t1 = +prompt("Enter first number");
let t2 = +prompt("Enter second number");
print_stars(t1, t2);