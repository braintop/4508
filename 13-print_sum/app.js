function sum_digits(number){//123 = > 1 + 2 + 3 = 6 ,1623=> 1 + 6 + 2 + 3 = 12
    let sum = 0;
    while(number > 0){
        sum = sum + number % 10;// שולף ספרה אחרונה
        number = Math.floor(number / 10);// מקצץ ספרה אחרונה
    }
    return sum;
}//735 73 5 0 

let number = +prompt("Enter first number");
let result = sum_digits(number);
alert("The sum of the digits is " + result);