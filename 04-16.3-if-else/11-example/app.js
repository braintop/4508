function generate() {
    let num = Math.floor(Math.random() * 900) + 100;
    let el = document.getElementById("result");
    el.innerHTML = num;
    el.style.backgroundColor = "yellow";
  }
  