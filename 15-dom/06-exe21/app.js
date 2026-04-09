let mydiv = document.querySelector(".mydiv");
mydiv.innerHTML = "Hello World";
mydiv.addEventListener("mouseover", ()=> {
    mydiv.classList.add("red");
    mydiv.classList.remove("blue");
    mydiv.innerHTML = "by by World!";
});
mydiv.addEventListener("mouseout", ()=> {
    mydiv.classList.add("blue");
    mydiv.classList.remove("red");
    mydiv.innerHTML = "Hello World";
});