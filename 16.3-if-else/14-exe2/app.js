function calculate() {
  let num = parseInt(document.getElementById("num").value);
  let le = document.getElementById("result");
  if (num >= 90 && num <= 100) {
    le.innerHTML = "מצוין";
    le.style.color = "green";
  } else if (num >= 80 && num < 90) {
    le.innerHTML = "טוב מאוד ";
    le.style.color = "blue";
  }
  else if (num >= 70 && num < 80) {
    le.innerHTML = "טוב";
     le.style.color = "orange";
  }
  else if (num >= 60 && num < 70) {
    le.innerHTML = "עובר ";
    le.style.color = "yellow";
  }
  else if (num < 60) {
    le.innerHTML = "נכשל";
    le.style.color = "red";
  }

}