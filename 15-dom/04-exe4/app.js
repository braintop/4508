let btn = document.querySelector("#btn");
btn.addEventListener("mouseover", function() {
    //alert("Button clicked");
    btn.style.backgroundColor = "red";
    btn.style.color = "white";
    btn.style.padding = "10px";
    btn.style.borderRadius = "5px";
    btn.style.border = "none";
    btn.style.cursor = "pointer";
    btn.style.fontSize = "16px";
    btn.style.fontWeight = "bold";
    btn.style.textAlign = "center";
    btn.style.textDecoration = "none";
    btn.innerHTML = "Click me again";
});
btn.addEventListener("mouseout", function() {
    btn.style.backgroundColor = "blue";
    btn.style.color = "white";
    btn.style.padding = "10px";
    btn.style.borderRadius = "5px";
    btn.style.border = "none";
    btn.style.cursor = "pointer";
    btn.style.fontSize = "16px";
    btn.style.fontWeight = "bold";
    btn.style.textAlign = "center";
    btn.style.textDecoration = "none";
    btn.innerHTML = "Click me again";
});
btn.addEventListener("click", function() {
    alert("Button clicked");
});