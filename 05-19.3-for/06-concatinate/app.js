function start(){
    let names = "";
    for(let i=1;i<=3;i++ ){
        let name = prompt("Enter name " + i); //oren
        names = names + name + " ";
    }//end of the loop
    console.log("The names are " + names);
    document.getElementById("result").innerHTML = "The names are " + names;
}

// i   |   name   |   names 
// 1   |   oren   |   oren
// 2   |   yael   |   oren yael
// 3   |   dan    |   oren yael dan