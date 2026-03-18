let age = parseInt(prompt("Enter your age (0-80)"));

if (age <13) {
  alert("Child!");
} 
else if (age >=13 && age<=19 ) {
  alert("Teenager");
} else if (age>=20 && age<=64) {
  alert("Adult");
} else  {
    alert("Sensior");
}