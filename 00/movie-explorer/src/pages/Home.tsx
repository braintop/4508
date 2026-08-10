import { useState, useEffect } from "react";
import type { Genre, Movie, HistoryItem } from "../types";
export default function Home() {

    const [genres, setGenres] = useState<Genre[]>([]);
    const [movies, setMovies] = useState<Movie[]>([]);
    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [loading, setLoading] = useState(false);
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;


    async function fetchGenres() {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
            const data = await response.json();
            setGenres(data.genres);
        } catch (error) {
            console.error("Error fetching genres:", error);
        }
    }

    async function handleGenreChange(genreId: string) {
        try {
            setLoading(true);

            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`);
            const data = await response.json();
            if (!response.ok) {
                throw new Error("Could not load movies");
            }
            const firstTenMovies: Movie[] = data.results.slice(0, 10);

            setMovies(firstTenMovies);
            const selectedGenre = genres.find(
                (genre) => genre.id === Number(genreId)
            );
            if (selectedGenre) {//save to history
                saveToHistory(selectedGenre.name);
            }

        } catch (error) {
            console.error("Error fetching movies:", error);
        }
        finally {
            setLoading(false);
        }
    }

    function saveToHistory(genreName: string) {
        const newItem: HistoryItem = {
            date: new Date().toLocaleString(),
            genre: genreName,
        };
        const oldHistory: HistoryItem[] = JSON.parse(
            localStorage.getItem("movieHistory") || "[]"
        );
        oldHistory.push(newItem);
        localStorage.setItem("movieHistory", JSON.stringify(oldHistory));

    }

    useEffect(() => {
        fetchGenres();
    }, []);
    return (
        <div className="page">
            <h1>Movie Explorer</h1>

            <div className="search-area">
                <label>Select Genre</label>

                <select
                    defaultValue=""
                    onChange={(event) => handleGenreChange(event.target.value)}
                >
                    <option value="" disabled>
                        Select a genre
                    </option>

                    {genres.map((genre) => (
                        <option key={genre.id} value={genre.id}>
                            {genre.name}
                        </option>
                    ))}
                </select>
            </div>

            {loading && <p>Loading...</p>}

            <div className="movies-container">
                {movies.map((movie) => (
                    <div className="movie-card" key={movie.id}>
                        {movie.poster_path ? (
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                        ) : (
                            <div className="no-image">No Image</div>
                        )}

                        <h2>{movie.title}</h2>

                        <p>
                            <strong>Release Date:</strong> {movie.release_date}
                        </p>

                        <p>
                            <strong>Rating:</strong> {movie.vote_average}
                        </p>

                        <p>
                            <strong>Description:</strong>
                        </p>

                        <p>{movie.overview || "No description available."}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}