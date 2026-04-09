function createCard(){
    const newDiv = document.createElement("div");
    newDiv.textContent = "I am new!";
    newDiv.classList.add("card");
    
    // Add to the page
    const container = document.querySelector("#container");
    container.appendChild(newDiv);
}