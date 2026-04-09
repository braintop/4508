let dynamicClick = document.querySelector("#dynamicClick");
dynamicClick.addEventListener("click", function() {
    alert("Dynamic Click");
});

function changeColor1() {
    let btn = document.getElementById("btn");
    btn.style.backgroundColor = "red";
}
function changeColor2() {
    let btn = document.querySelector("#btn");
    btn.style.backgroundColor = "red";
}

function changeDivToGreen() {
    let div = document.querySelector(".mydiv");
    div.style.backgroundColor = "green";
}
function changePToBlue() {
    let p = document.querySelector("p");
    p.style.color = "blue";
}
function changeAllPToRed() {
    let p = document.querySelectorAll("p");
    console.log(p);
    for(let i = 0; i < p.length; i++) {
        p[i].style.color = "purple";
    }
}