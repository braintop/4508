import { useState } from "react";
import movies from "../data/movies";
import MovieCard from "../Components/MovieCard";

export default function HomePage() {
    const [searchText, setSearchText] = useState("");

    const filteredMovies = movies.filter(movie =>
        movie.name.toLowerCase().includes(searchText.toLowerCase()) ||
        movie.genre.toLowerCase().includes(searchText.toLowerCase()) ||
        movie.actors.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div>
            <h1>Cinema Tickets</h1>

            <input
                type="text"
                placeholder="Search movie..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />

            {filteredMovies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
}


