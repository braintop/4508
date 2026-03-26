
function start(){
    let colors = ["red", "green", "blue", "yellow", "purple"];
    let num = Math.floor(Math.random()* colors.length);//0- 4 
    document.body.style.backgroundColor = colors[num];
    document.getElementById("result").innerHTML = colors[num];
}