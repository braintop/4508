function checkEvenOdd() {
  let num = parseInt(document.getElementById("num").value);
  let el = document.getElementById("result");

  if (num % 2 === 0) {
    el.innerHTML = num + " is Even";
    el.style.color = "green";
  } else {
    el.innerHTML = num + " is Odd";
    el.style.color = "red";
  }
}