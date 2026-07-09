import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import movies from "../data/movies";
import MovieCard from "../Components/MovieCard";
import type { RootState } from "../store/store";
import { clearError } from "../ticketSlice/ticketSlice";

export default function HomePage() {
    const [searchText, setSearchText] = useState("");
    const dispatch = useDispatch();

    const error = useSelector(
        (state: RootState) => state.tickets.error
    );

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

            {error && (
                <div>
                    <p>{error}</p>
                    <button onClick={() => dispatch(clearError())}>סגור</button>
                </div>
            )}

            {filteredMovies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
}
