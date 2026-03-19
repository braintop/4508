let temp = +prompt("What is temperature ?");

if (temp > 30) {
    document.getElementById("result").innerHTML = "Hot";
    document.body.style.backgroundColor = "red";
} 
else if (temp >= 20 && temp <= 30) {
    document.getElementById("result").innerHTML = "Warm";
    document.body.style.backgroundColor = "yellow";

} 
else if (temp >= 10 && temp <= 19) {
    document.getElementById("result").innerHTML = "Cool";
    document.body.style.backgroundColor = "green";

} 
else {
    document.getElementById("result").innerHTML = "Cold";
    document.body.style.backgroundColor = "blue";
}

// שאלות לתלמידים

// מה תציג התוכנית אם המשתמש יכניס 35?

// מה תציג התוכנית אם המשתמש יכניס 25?

// מה תציג התוכנית אם המשתמש יכניס 15?

// מה תציג התוכנית אם המשתמש יכניס 5?