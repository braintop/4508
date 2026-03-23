let items = [];
function addItem(){
    let item = prompt("Enter item");
    let color = prompt("Enter color");
    items.push(item);
    document.getElementById("result").innerHTML = items + "<br>" + items.length;
        document.body.style.backgroundColor =color;
    
}
