function createCard(){
    const newDiv = document.createElement("div");
    newDiv.textContent = "I am new!";
    newDiv.classList.add("card");
    //console.log(newDiv);
    // Add to the page
    const container = document.querySelector("#container");
    container.appendChild(newDiv);

    // container.append(
    //     document.createElement("hr"),
    //     "Some text"
    //   );
      
}
function removeCard1(){
    const container = document.querySelector("#container");
    container.removeChild(container.lastChild);
}
function removeCard2(){
    const card = document.querySelector(".card ");
    card.remove();
}