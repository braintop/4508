function all_above_0(num1, num2, num3){
    if(num1 > 0 && num2 > 0 && num3 > 0){
        return 1;
    }
    return 0;
}
    
let x = +prompt("Enter first number");
let y = +prompt("Enter second number");
let z = +prompt("Enter third number");
let result = all_above_0(x, y, z);
alert(result);