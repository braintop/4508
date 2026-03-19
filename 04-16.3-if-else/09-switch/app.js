let temp = +prompt("What is  temperature ?");

switch (temp) {
    case temp > 30:
        alert("hot");
        break;
    case temp >= 20 && temp <= 30:
        alert("warm");
        break;
    case temp >= 10 && temp <= 19:
        alert("cool");
        break;
    default:
        alert("cold");
        break;
}