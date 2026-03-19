function showName(){
    let firstName = prompt("Enter your name");
    alert("Hello " + firstName);
    console.log(typeof firstName);
}
function sum2Numbers(){
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    let sum = num1 + num2;
    alert("The sum is " + sum);
    console.log(typeof num1);
    console.log(typeof num2);
    console.log(typeof sum);
}

function randomNumber(){
    let random = Math.floor(Math.random()*100);//0-100
    alert("The random number is " + random);
    console.log(typeof random);
    
}
