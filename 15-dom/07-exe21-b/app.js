let mydiv = document.querySelector(".mydiv");
mydiv.innerHTML = "Hello World";
mydiv.addEventListener("mouseover", ()=> {
    mydiv.style.backgroundColor = "red";
    mydiv.innerHTML = "by by World!";
});
mydiv.addEventListener("mouseout", function() {
    mydiv.style.backgroundColor = "blue";
    mydiv.innerHTML = "Hello World";
});