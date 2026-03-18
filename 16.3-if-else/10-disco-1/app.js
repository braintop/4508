function disco() {
  let num = Math.floor(Math.random() * 3) + 1;

  if (num === 1) {
    document.budy.style.backgroundColor = "red";
  } else if (num === 2) {
    document.budy.style.backgroundColor = "green";
  } else {
    document.budy.backgroundColor = "blue";
  }
  document.getElementById("result").innerHTML = num;


}