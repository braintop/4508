let input = document.getElementById("firstname");
input.addEventListener("input", (e)=> {
    let result = document.getElementById("result")
    result.innerHTML = e.target.value;
    // if(result.innerHTML.length < 10){
    //     result.style.color = "red";
    // }
    // else if(result.innerHTML.length > 10){
    //     result.style.color = "blue";
    // }
    // else{
    //     result.style.color = "green";
    // }

    if(result.innerHTML.length %2 == 0){
        result.style.color = "red";
    }
    else {
        result.style.color = "blue";
    }
});