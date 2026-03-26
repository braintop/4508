let items = [];
function addItem(){
    let item = prompt("Enter item");
    let color = prompt("Enter color");
    items.push(item);
    document.getElementById("result").innerHTML = items + "<br>" + items.length;
  document.body.style.backgroundColor =color;
    
}

function addItem2(){
    let item = prompt("Enter item");
    items.push(item);
    let names ="";//david br shlomo br 
    for(let i = 0; i < items.length; i++){
        names = names + items[i] + "<br>";
    }
    console.log(names);
    document.getElementById("result").innerHTML = names;
}
