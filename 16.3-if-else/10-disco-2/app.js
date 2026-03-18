function disko(){
  let num = Math.floor(Math.random()* 3 ) + 1;
  
  if( num === 1) { 
  document.body.style.backgroundColor = "red";
  } else if (num === 2){
      document.body.style.backgroundColor = "green";
  } else  {
      document.body.style.backgroundColor = "blue";
  }
  document.getElementById ("result").innerHTML = num;
  
  
  }