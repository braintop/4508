loadMovies();
function loadMovies() {
    let tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    let movies = JSON.parse(localStorage.getItem("movies"));

    if (movies==null) {
        movies = [];
    }

    for (let i = 0; i < movies.length; i++) {
        let row = document.createElement("tr");// <tr id="row-0">
        row.id = `row-${i}`;//row-0, row-1, row-2, ...
        row.innerHTML = `
        <td>${movies[i].genre}</td>
        <td>${movies[i].name}</td>
        <td>${movies[i].director}</td>
        <td>${movies[i].duration}</td>
        <td>${movies[i].price}</td>
        <td><img src="${movies[i].poster}" alt="${movies[i].name}" width="60"></td>
        <td>${movies[i].date}</td>
        <td><button class="delete-btn"  onclick="deleteMovie(${i})"> ${i}   מחק</button></td>
        `;
        document.querySelector("tbody").appendChild(row);
        }
}
function addMovie(event) {
    let movies = JSON.parse(localStorage.getItem("movies"));
    if (movies==null) {
        movies = [];
    }
    event.preventDefault();//מניעת רענון הדף
    let genre = document.getElementById("genre").value;
    let name = document.getElementById("name").value;
    let director = document.getElementById("director").value;
    let duration = document.getElementById("duration").value;
    let price = document.getElementById("price").value;
    let poster = document.getElementById("poster").value;
    let date = document.getElementById("date").value;
    let movie = {
        genre: genre,
        name: name,
        director: director,
        duration: duration,
        price: price,
        poster: poster,
        date: date
    }
    movies.push(movie);
    localStorage.setItem("movies", JSON.stringify(movies));
    document.getElementById("movieForm").reset();
    loadMovies();
}

function deleteMovie(index) {
    let movies = JSON.parse(localStorage.getItem("movies"));
    if (movies==null||movies.length==0) {
        alert("לא נמצאו סרטים");
        return;
    }

    let ok = confirm("האם אתה בטוח שברצונך למחוק את הסרט?");
    if (ok) {
        movies.splice(index ,1);//מחיקת הסרט מהמערך
        let row = document.getElementById(`row-${index}`);
        row.remove();
        localStorage.setItem("movies", JSON.stringify(movies));
        loadMovies();
    }
    else {
        alert("הסרט לא נמחק");
    }
}
