let favMovies = [
    {
        name: "The Dark Knight",
        year: 2008,
        genre: "Action"
    },
    {
        name: "The Dark Knight",
        year: 2008,
        genre: "Action"
    }
]

function save(){
    let strMovies = JSON.stringify(favMovies);
    localStorage.setItem("favMovies", strMovies);
    console.log(strMovies);
}

function load(){
    let strMovies = localStorage.getItem("favMovies");
    let favMovies = JSON.parse(strMovies);
    console.log(favMovies);
}

save();
load();