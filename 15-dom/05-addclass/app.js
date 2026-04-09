function hideDiv() {
    let mydiv = document.querySelector(".mydiv");
    mydiv.classList.add("hidden");
    mydiv.classList.remove("visible");
}
function showDiv() {
    let mydiv = document.querySelector(".mydiv");
    mydiv.classList.remove("hidden");
    mydiv.classList.add("visible");
}


function f(x,y){
    return x + y;
}

let f1 = function(x,y){
    return x + y;
}

let f2 = (x,y) =>{
    return x + y;
} 
